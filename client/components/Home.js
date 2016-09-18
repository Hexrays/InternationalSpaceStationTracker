import React, { Component } from 'react';
import { connect } from 'react-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import IssMap from './Map';
import IssLocationsList from './IssLocationsList';
import * as actions from '../actions';

import Marker from './Marker';
import { MAPS_API_KEY } from '../config';

class Home extends Component {
  static defaultProps = {
    zoom: 2
  }
  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);

    this.state = {
      center  : null,
      timeout : null
    }
  }

  componentWillMount() {
    this.props.pollIssPosition();
    setInterval(() => {
      this.props.pollIssPosition();
    }, 5000);
  }

  renderMarker({location, index}) {
    return (
      <Marker
        key={index}
        {...location}
      ></Marker>
    );
  }

  _handleMapChange({center, zoom}) {
    let timeout;

    if (this.state.timeout) {
      window.clearTimeout(this.state.timeout)
    }
    timeout = setTimeout(() => {
      this.setState({
        center: null,
        timeout: null
      });
    }, 30000)

    this.setState({
      center,
      timeout
    });
  }

  render() {
    const locations = this.props.locations;
    const subLocations = locations.slice(Math.max(locations.length - 10, 1));

    if(!locations.length) {
      return <div>Loading...</div>
    }
    const center = this.state.center ? this.state.center : locations[locations.length -1].location

    return (
      <div className="landing-container container">
        <div className="map-container">
          <IssMap
            zoom={this.props.zoom}
            locations={this.props.locations}
            apiKey={MAPS_API_KEY}
            onMapChange={this._handleMapChange.bind(this)}
            center={center}
           >
           {locations.map(location => this.renderMarker(location))}
          </IssMap>
        </div>
        <table className="data-table">
          <thead>
            <tr key="1">
              <th>Time</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          {subLocations.reverse().map(location => <IssLocationsList {...location} key={location.index} /> )}
        </table>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { locations: state.issReducer };
}

export default connect(mapStateToProps, actions)(Home)
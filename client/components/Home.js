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
    zoom: 3
  }
  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
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

  render() {
    const locations = this.props.locations;
    const subLocations = locations.slice(Math.max(locations.length - 10, 1));

    if(!locations.length) {
      return <div>Loading...</div>
    }

    return (
      <div className="landing-container container">
        <div className="map-container">
          <IssMap
            zoom={this.props.zoom}
            locations={this.props.locations}
            apiKey={MAPS_API_KEY}
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
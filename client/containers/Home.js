import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MAPS_API_KEY } from '../config';

import IssMap from '../components/Map';
import Marker from '../components/Marker';
import IssLocationsTable from '../components/IssLocationsTable';
import * as actions from '../actions';


class Home extends Component {
  static defaultProps = {
    zoom: 3
  }

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
        <IssMap
          zoom={this.props.zoom}
          locations={this.props.locations}
          apiKey={MAPS_API_KEY}
          onMapChange={this._handleMapChange.bind(this)}
          center={center} >
          {locations.map(location => this.renderMarker(location))}
        </IssMap>
        <IssLocationsTable
          locations={locations}/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { locations: state.issReducer };
}

export default connect(mapStateToProps, actions)(Home);

// {subLocations.reverse().map(location => <IssLocationsTableItem {...location} key={location.index} /> )}

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MAPS_API_KEY } from '../config';

import IssMap from '../components/Map';
import Marker from '../components/Marker';
import IssCurrentLocation from '../components/IssCurrentLocation';
import Copy from '../components/Copy';
import * as actions from '../actions';

import { angleInDeg } from '../helpers';


class Hero extends Component {
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

  renderMarker({location, index}, total) {
    const latest = index == total ? true : false;
    return (
      <Marker
        key={index}
        {...location}
        latest={latest}
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
    const lastLocId = locations.length -1;
    let angle;

    if(!locations.length) {
      return <div>Loading...</div>
    }
    const lastLocation = locations[lastLocId];
    const subLocations = locations.slice(Math.max(locations.length - 3, 1));
    const center = this.state.center ? this.state.center : lastLocation.location

    return (
      <section className="hero">
        <IssMap
          zoom={this.props.zoom}
          locations={this.props.locations}
          apiKey={MAPS_API_KEY}
          onMapChange={this._handleMapChange.bind(this)}
          center={center} >
          {locations.map(location => this.renderMarker(location, lastLocId))}
        </IssMap>
        <IssCurrentLocation
          location={lastLocation}/>
        <Copy locations={subLocations}/>
      </section>
    );
  }
};

function mapStateToProps(state) {
  return { locations: state.issReducer };
}

export default connect(mapStateToProps, actions)(Hero);

// {subLocations.reverse().map(location => <IssLocationsTableItem {...location} key={location.index} /> )}

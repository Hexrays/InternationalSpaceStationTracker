import React, { Component } from 'react';
import { connect } from 'react-redux';

import Marker from '../components/Marker';
import IssMap from '../components/Map';
import IssCurrentLocation from '../components/IssCurrentLocation';
import Copy from '../components/Copy';
import { MAPS_API_KEY } from '../config';
import * as actions from '../actions';

class Hero extends Component {
  static defaultProps = {
    zoom: 3,
    center: {lat: 40.7428665, lng: -73.9909096},
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
    }, 10000);
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
    const newCenter = center.lat === 0 ? null : center;
    let timeout;

    if (this.state.timeout) {
      window.clearTimeout(this.state.timeout)
    }
    timeout = setTimeout(() => {
      this.setState({
        center: null,
        timeout: null
      });
    }, 15000);


    this.setState({
      newCenter,
      timeout
    });
  }

  render() {
    const locations    = this.props.locations;
    const lastLocId    = locations.length -1;
    const lastLocation = locations[lastLocId] || {index: 'o',location:{lat:0, lng:0}};
    const center       = this.state.center ? this.state.center : lastLocation.location

    return (
      <div className="hero">
        <IssMap
          zoom={this.props.zoom}
          apiKey={MAPS_API_KEY}
          onMapChange={this._handleMapChange.bind(this)}
          center={center} >
          {locations.map(location => this.renderMarker(location, lastLocId))}
        </IssMap>
        <IssCurrentLocation
          location={lastLocation}/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { locations: state.issReducer };
}

export default connect(mapStateToProps, actions)(Hero);

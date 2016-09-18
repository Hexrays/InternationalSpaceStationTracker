import React from 'react';
import GoogleMap from 'google-map-react';

function createMapOptions() {
  return {
    styles: [{ stylers: [{ 'saturation': -65 }, { 'gamma': 0.8 }, { 'lightness': 10 }, { 'visibility': 'on' }] }]
  };
}

const IssMap = (props) => (
  <div className="map-container">
    <GoogleMap
      options={createMapOptions}
      bootstrapURLKeys={{
          key: props.apiKey,
      }}
      center={props.center}
      zoom={props.zoom}
      onChange={props.onMapChange}
      >
      {props.children}
    </GoogleMap>
  </div>
);

export default IssMap;
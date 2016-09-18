import React from 'react';
import GoogleMap from 'google-map-react';

function createMapOptions() {
  return {
    minZoomOverride: true,
    minZoom: 2,
  };
}

const IssMap = (props) => (
  <GoogleMap
    options={createMapOptions}
    bootstrapURLKeys={{
        key: props.apiKey,
    }}
    center={props.locations[props.locations.length -1].location}
    zoom={props.zoom}
    >
    {props.children}
  </GoogleMap>
);

export default IssMap;
import React from 'react';
import GoogleMap from 'google-map-react';

const IssMap = (props) => (
  <GoogleMap
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
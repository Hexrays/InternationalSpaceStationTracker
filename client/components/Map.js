import React from 'react';
import GoogleMap from 'google-map-react';

function createMapOptions() {
  return {
    styles: [
      {
        "stylers": [
          { "invert_lightness": true },
          { "hue": "#4d00ff" },
          { "gamma": 0.6 },
          { "lightness": 9 },
          { "saturation": -52 }
        ]
      },{
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
          { "hue": "#9000ff" },
          { "saturation": 12 },
          { "lightness": -43 }
        ]
      },{
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          { "lightness": 2 },
          { "hue": "#0022ff" },
          { "saturation": -51 }
        ]
      }
    ],
  };
}

const IssMap = (props) => (
  <section className="map-container">
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
  </section>
);

export default IssMap;
import React from 'react';

const IssCurrentLocation = ({location}) => (
  <figure className="map-info">
    <figcaption className="map-info-title">ISS Current Coordinates</figcaption>
    <ul>
      <li>
        <span className="map-info-item-title">Latitude</span>
        <span className="map-info-coord number">
          {location.location.lat === 0 ? 'Loading' : location.location.lat.toString().substring(0,8)}
        </span>
      </li>
      <li>
        <span className="map-info-item-title">Longitude</span>
        <span className="map-info-coord number">
          {location.location.lng === 0 ? 'Loading' : location.location.lng.toString().substring(0,8)}
          </span>
      </li>
    </ul>
  </figure>
);

export default IssCurrentLocation;
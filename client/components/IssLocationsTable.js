import React from 'react';
import IssLocationsTableItem from './IssLocationsTableItem';

const IssLocationsTable = ({locations}) => (
  <table className="data-table">
    <thead>
      <tr key="head">
        <th>Time</th>
        <th>Latitude</th>
        <th>Longitude</th>
      </tr>
    </thead>
    <tbody>
      <IssLocationsTableItem {...locations[0]} key="start" />
      <IssLocationsTableItem {...locations[locations.length -1]} key={locations[locations.length -1].index} />
    </tbody>
  </table>
);

export default IssLocationsTable;
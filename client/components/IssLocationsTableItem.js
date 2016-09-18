import React from 'react';

const IssLocationsTableItem = ({time, index, location}) => {
  return (
    <tr key={index}>
      <td>{time} </td>
      <td>{location.lat} </td>
      <td>{location.lng} </td>
    </tr>
  );
}
export default IssLocationsTableItem;
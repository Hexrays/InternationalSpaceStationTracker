import React from 'react';

const IssLocationsList = ({time, index, location}) => {
  return (
    <tr key={index}>
      <td>{time} </td>
      <td>{location.lat} </td>
      <td>{location.lng} </td>
    </tr>
  );
}
export default IssLocationsList;
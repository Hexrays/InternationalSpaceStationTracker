import React from 'react';

const renderLogItem = (item) => (
  <li className="log-item" key={item.id}>
    {item.time}
    <br/>
    <span className="log-descriptor">latitude:</span> {item.location.lat.toString().substring(0,12)}
    <br/>
    <span className="log-descriptor">longitude:</span> {item.location.lng.toString().substring(0,12)}
  </li>
);

const IssLocationLog = ({locations}) => (
  <div className="log-info">
    <ul>
      {locations.map(location => renderLogItem(location))}
    </ul>
  </div>
);

export default IssLocationLog;
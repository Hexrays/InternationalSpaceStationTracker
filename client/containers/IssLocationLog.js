import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class IssLocationLog extends Component{
  renderLogItem(item) {
    return (
      <li className="log-item" key={item.index}>
        {item.time}
        <br/>
        <span className="log-descriptor">latitude:</span> {item.location.lat.toString().substring(0,12)}
        <br/>
        <span className="log-descriptor">longitude:</span> {item.location.lng.toString().substring(0,12)}
      </li>
    );
  }

  render() {
    const locations = this.props.locations.slice(Math.max(this.props.locations.length - 3, 1));
    return (
      <div className="log-info">
        <ul>
          {locations.map(location => this.renderLogItem(location))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { locations: state.issReducer };
}

export default connect(mapStateToProps, actions)(IssLocationLog);

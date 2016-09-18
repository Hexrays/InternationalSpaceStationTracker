import React from 'react';

import Header from './Header';

const App = React.createClass({
  render() {
    return (
      <div >
        <Header title="International Space Station" />
        {React.cloneElement(this.props.children, { ...this.props, children: this.props.children.props.children })}
      </div>
    );
  }
});

export default App;
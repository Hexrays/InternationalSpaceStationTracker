import React from 'react';

import Header from './Header';

const App = (props) => (
  <div>
    <Header title="International Space Station" />
    {React.cloneElement(props.children, { ...props, children: props.children.props.children })}
  </div>
);

export default App;
import React from 'react';

const App = (props) => (
  <div>
    {React.cloneElement(props.children, { ...props, children: props.children.props.children })}
  </div>
);

export default App;
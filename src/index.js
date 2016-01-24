import React, { Component } from 'react';
import { render } from 'react-dom';

const App = props => (
  <div>
    <h1>It Works!</h1>
  </div>
);

render(
  <App />,
  document.getElementById('root')
)

var React = require('react');
var ReactDOM = require('react-dom');
var AppRoot = require('./components/AppRoot');
const logatim = require('logatim');

// setting root level
logatim.setLevel('debug')

ReactDOM.render(<AppRoot />,
  document.getElementById('app-root')
);

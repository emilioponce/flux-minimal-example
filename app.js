var React = require('react');
var ReactDOM = require('react-dom');
var AppRoot = require('./components/AppRoot');
const log = require('logatim');

// setting root level
log.setLevel('debug')
log.green.info('Loading...');

ReactDOM.render(<AppRoot />,
  document.getElementById('app-root')
);

log.green.info('Done!');

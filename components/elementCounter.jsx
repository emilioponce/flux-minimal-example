var React = require('react');
var Badge = require('react-bootstrap').Badge;

module.exports = React.createClass({

  render: function(){
    return <div>
      Number of elements in list: <Badge>{this.props.size}</Badge>
    </div>
  }

});

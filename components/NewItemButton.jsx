var React = require('react');
var AppDispatcher = require('../dispatcher/AppDispatcher');


module.exports = React.createClass({

  createItem: function(e){

    AppDispatcher.dispatch({
      action: 'add-item',
      new_item: {
        id: 3,
        name: 'Item 3'
      }
    });
  },

  render: function(){
    return <button type="button">Click Me!</button>;
  }
});

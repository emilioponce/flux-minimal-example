var React = require('react');
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = React.createClass({
  
  _createItem: function(event){

    // prevent to reload the page
    event.preventDefault();

    AppDispatcher.dispatch({
      action: 'add-item',
      new_item: {
        id: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
        name: 'New Item'
      }
    });
  },

  render: function(){
    return <form onSubmit={this._createItem}>
      <button>Add new item</button>
    </form>;
  }

});

var React = require('react');
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = React.createClass({

  createItem: function(e){

    // so we don't reload the page
    e.preventDefault();

    AppDispatcher.dispatch({
      action: 'add-item',
      new_item: {
        id: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
        name: 'New Item'
      }
    });
  },
  render: function(){
    return <form onSubmit={ this.createItem.bind(this) }>
      <button>Add new item</button>
    </form>;
  }
});

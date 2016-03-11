var React = require('react');
var ItemsActions = require('../actions/ItemsActions');

module.exports = React.createClass({

  _createItem: function(event){

    // prevent to reload the page
    event.preventDefault();

    ItemsActions.addItem();
  },

  render: function(){
    return <form onSubmit={this._createItem}>
      <button>Add new item</button>
    </form>;
  }

});

var React = require('react');
var ItemsActions = require('../actions/itemsActions');

module.exports = React.createClass({

  _createItem: function(event){

    // prevent to reload the page:  If this method is called, the default action of the event will not be triggered.
    event.preventDefault();

    ItemsActions.addItem();
  },

  render: function(){
    return <form onSubmit={this._createItem}>
      <button>Add new item</button>
    </form>;
  }

});

var React = require('react');
var ItemsActions = require('../actions/itemsActions');

module.exports = React.createClass({

  _removeItem: function(event){

    // prevent to reload the page
    event.preventDefault();

    ItemsActions.removeItem();

  },

  render: function(){
    return <form onSubmit={this._removeItem}>
      <button>remove Last item</button>
    </form>;
  }

});

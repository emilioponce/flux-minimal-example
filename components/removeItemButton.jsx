var React = require('react');
var ItemsActions = require('../actions/itemsActions');

module.exports = React.createClass({

  _removeItem: function(event){

    // prevent to reload the page:  If this method is called, the default action of the event will not be triggered.
    event.preventDefault();

    ItemsActions.removeItem();
  },

  render: function(){
    return <form onSubmit={this._removeItem}>
      <button>remove Last item</button>
    </form>;
  }

});

var React = require('react');
var Store = require('../stores/Store');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var NewItemButton = require('./NewItemButton');

module.exports = React.createClass({

  // Method to retrieve state from Stores
  getListState: function() {
    return {
      items: Store.getItems()
    };
  },

  // Method to set internal react states based on Store changes
  _onChange: function() {
    this.setState(this.getListState());
  },

  // Add change listener to store
  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  render: function(){
    var items = Store.getItems();
    var itemsHtml = items.map(
      function(item){
        return <li key={ item.id }>{ item.name }</li>;
        });
        // returning one div with item name for every array position
        return <div>
          <ul>{itemsHtml}</ul>
          <NewItemButton/>
        </div>;
      }

    });

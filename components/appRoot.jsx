var React = require('react');
var Store = require('../stores/store');
var AppDispatcher = require('../dispatcher/appDispatcher');
var AddItemButton = require('./addItemButton');
var RemoveItemButton = require('./removeItemButton');

module.exports = React.createClass({

  // Internal State of the component: Method to retrieve state from Store
  getListState: function() {
    return {
      items: Store.getItems()
    };
  },

  // Method to set internal react component state based on Store data changes
  _onChange: function() {
    this.setState(this.getListState());
  },

  // Add change listener to store, so this component will refetch data when 'change' event is emitted by the store
  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  render: function(){
    var items = Store.getItems();
    var itemsHtml = items.map(
      function(item){
        return <li key={ item.id }>{ item.name }</li>;
        });
        // returning items of a list: a <li/> with item key & name for every 'items' array position
        return <div>
          <div>
          <ul>{itemsHtml}</ul>
          </div>
          <div>
          <AddItemButton/>
          <RemoveItemButton/>
          </div>
        </div>;
      }

    });

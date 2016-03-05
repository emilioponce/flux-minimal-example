var React = require('react');
var Store = require('../stores/Store');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var NewItemButton = require('./NewItemButton');

module.exports = React.createClass({

  render: function(){
    var items = Store.getItems();
    // returning one div with item name for every array position
    var itemsHtml = items.map(
      function(item){
        return <li key={ item.id }>{ item.name }</li>;
      });
      return <div>
      <ul>{itemsHtml}</ul>
      <NewItemButton/>
      </div>;
    }
  });

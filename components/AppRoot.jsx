var React = require('react');
var Store = require('../stores/Store');

module.exports = React.createClass({

  render: function(){

    var items = Store.getItems();

    // returning one div with item name for every array position
    var itemsHtml = items.map(
      function(item){
        return <li key={ item.id }>{ item.name }</li>;
      });

      // returning all the items
      return <ul>{itemsHtml}</ul>;
    }
  });

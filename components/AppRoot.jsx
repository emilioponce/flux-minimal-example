var React = require('react');
var Store = require('../stores/Store');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var NewItemButton = require('./NewItemButton');

// Method to retrieve state from Stores
let getListState = () => {
  return {
    items: Store.getItems()
  };
}

class AppRoot extends React.Component {

  // Method to setState based upon Store changes
  _onChange() {
    this.setState(getListState());
  }

  // Add change listener to store
  componentDidMount() {
    Store.addChangeListener(this._onChange.bind(this));
  }

  render(){
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
    }

    export default AppRoot;

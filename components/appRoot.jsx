var React = require('react');
var Store = require('../stores/store');
var AddItemButton = require('./addItemButton');
var RemoveItemButton = require('./removeItemButton');
var ElementCounter = require('./elementCounter');
// Navbar
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

module.exports = React.createClass({

  // Retrieves the Internal State of the component. Method to retrieve component state from Store
  getListState: function() {
    return {
      items: Store.getItems()
    };
  },

  // Method to set internal react component state, based on Store data changes.
  // This setState function causes repainting the component (execution of render function)
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
        return <li key={item.id}>{item.name}</li>;
        });
        return <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="https://github.com/emilioponce/flux-minimal-example">Flux Minimal Example</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <Navbar.Form><AddItemButton/></Navbar.Form>
              <Navbar.Form><RemoveItemButton/></Navbar.Form>
              <NavItem><ElementCounter size={itemsHtml.length}/></NavItem>
            </Nav>
          </Navbar>
          <div>
            <ul>{itemsHtml}</ul>
          </div>
        </div>
        ;
      }

    });

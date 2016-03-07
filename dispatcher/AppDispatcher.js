var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var Store = require('../stores/Store');

// Register callback with AppDispatcher. Dispatcher is used to broadcast payloads to registered callbacks.
AppDispatcher.register((payload) => {

  let action = payload.action;
  let new_item = payload.new_item;
  let id = payload.id;

  switch(action) {

    // Respond to add-item action
    case 'add-item':
    Store.addItem(new_item);
    break;

    default:
    return true;
  }

  // If action was responded to, emit change event
  Store.emitChange();

  return true;

});

export default AppDispatcher;

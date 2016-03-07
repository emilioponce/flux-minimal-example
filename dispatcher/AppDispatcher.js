var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var Store = require('../stores/Store');

// Dispatcher is used to broadcast payloads to registered stores callbacks.
AppDispatcher.register(function(payload) {

  let action = payload.action;
  let new_item = payload.new_item;

  switch(action) {
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

module.exports = AppDispatcher;

var Dispatcher = require('flux').Dispatcher;
var Store = require('../stores/store');
var appConstants = require('../constants/appConstants');

var AppDispatcher = new Dispatcher();

// Dispatcher is used to broadcast payloads to registered stores callbacks.
AppDispatcher.register(function(payload) {

  let action = payload.action;
  let new_item = payload.new_item;

  switch(action) {
    case appConstants.ADD_ITEM:
      Store.addItem(new_item);
      break;
    case appConstants.REMOVE_ITEM:
      Store.removeItem();
      break;
    default:
      return true;
  }

  // If action was responded to, emit change event
  Store.emitChange();

  return true;
});

module.exports = AppDispatcher;

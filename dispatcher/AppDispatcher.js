var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var Store = require('../stores/Store');

// Register callback with AppDispatcher
module.exports = AppDispatcher.register(

  function(payload){

    var action = payload.action;
    var new_item = payload.new_item;
    var id = payload.id;

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

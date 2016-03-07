var EventEmitter = require('events');
var _ = require('lodash');

module.exports = _.extend({}, EventEmitter.prototype, {

  items: [
    {
      id: 0,
      name: 'Item 1'
    },
    {
      id: 1,
      name: 'Item 2'
    }
  ],

  getItems: function(){
    return this.items;
  },

  // Add item
  addItem: function(new_item){
    this.items.push(new_item);
  },

  // Emit Change event (_onChange) to AppRoot in order to render new state
  emitChange: function(){
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback){
    this.on('change', callback);
  }

});

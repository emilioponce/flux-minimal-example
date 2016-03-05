var EventEmitter = require('events');
var _ = require('lodash');

module.exports = _.extend({}, EventEmitter.prototype, {

  items: [
    {
      name: 'Item 1',
      id: 0
    },
    {
      name: 'Item 2',
      id: 1
    }
  ],
  getItems: function(){
    return this.items;
  },

});

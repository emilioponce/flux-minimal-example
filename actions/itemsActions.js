var AppDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');

module.exports = {
  addItem: function(){
    // triggers add-item action when user clics button
    AppDispatcher.dispatch({
      action: appConstants.ADD_ITEM,
      new_item: {
        id: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
        name: 'New Item'
      }
    });
  }
};

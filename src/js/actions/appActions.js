var AppDispatcher = require('../dispatchers/appDispatcher.js');
var AppConstants = require('../constants/appConstants.js');

var AppActions = {
    addItem: function(itemId) {
        AppDispatcher.dispatch({
            actionType: AppConstants.ADD_ITEM,
            itemId: itemId
        });
    },
    removeItem: function(itemId) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REMOVE_ITEM,
            itemId: itemId
        });
    },
    increaseItem: function(itemId) {
        AppDispatcher.dispatch({
            actionType: AppConstants.INCREASE_ITEM,
            itemId: itemId
        });
    },
    decreaseItem: function(itemId) {
        AppDispatcher.dispatch({
            actionType: AppConstants.DECREASE_ITEM,
            itemId: itemId
        });
    }
};

module.exports = AppActions;

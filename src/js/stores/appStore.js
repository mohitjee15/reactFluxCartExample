var AppDispatcher = require('../dispatchers/appDispatcher');
var AppConstants = require('../constants/appConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _cart = {};

var _catalog = {
    1: {
        id: 1,
        name:'Chaddi',
        cost: 23
    },
    2: {
        id: 2,
        name:'Baniyan',
        cost: 23
    },
    3: {
        id: 3,
        name:'Pant',
        cost: 23
    }
};

var _addItem = function(itemId) {
    if(_cart[itemId]) {
        _cart[itemId].quantity++;
    } else {
        _cart[itemId] = {
            quantity : 1
        };
    }
};
var _removeItem = function(itemId) {
    delete _cart[itemId];
};

var _decreaseItem = function(itemId) {
    if(_cart[itemId].quantity > 1) {
        _cart[itemId].quantity--;
    } else {
        _removeItem(itemId);
    }
};
var _increaseItem = function(itemId) {
    _cart[itemId].quantity++;
};

var _cartTotal = function() {
    var total = 0;

    _.forIn(_cart, function(value, key) {
        total += value.quantity;
    });

    return total;
};

var AppStore = assign(EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT)
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback)
    },

    getCart: function(){
        return _cart
    },

    getCatalog: function(){
        return _catalog
    },

    getCartTotals: function(){
        return _cartTotal()
    },

    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload; // this is our action from handleViewAction
        switch(action.actionType){
            case AppConstants.ADD_ITEM:
                _addItem(payload.itemId);
                break;

            case AppConstants.REMOVE_ITEM:
                _removeItem(payload.itemId);
                break;

            case AppConstants.INCREASE_ITEM:
                _increaseItem(payload.itemId);
                break;

            case AppConstants.DECREASE_ITEM:
                _decreaseItem(payload.itemId);
                break;
        }

        AppStore.emitChange();

        return true;
    })
});

module.exports = AppStore;

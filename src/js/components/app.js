/** @jsx React.DOM */

var React = require('react');
var AppStore = require('../stores/appStore');
var Catalog = require('./catalog');
var Cart = require('./cart');

var App = React.createClass({

    getInitialState: function() {
        return {
            allProducts: AppStore.getCatalog(),
            productsInCart: AppStore.getCart()
        }
    },

    _onChange: function() {
        this.setState({
            allProducts: AppStore.getCatalog(),
            productsInCart: AppStore.getCart()
        });
    },

    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    render: function () {
        return <div>
            <Catalog products={AppStore.getCatalog()} />
            <Cart allProducts={AppStore.getCatalog()} productsInCart = {AppStore.getCart()} totalCost={AppStore.getCartTotals()} />
            </div>
    }

});

module.exports = App;



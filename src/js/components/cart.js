/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/appActions');
var _ = require('lodash');

var RemoveFromCart = require('./removeFromCart');
var IncreaseQuantity = require('./increaseQuantity');
var DecreaseQuantity = require('./decreaseQuantity');

var Cart = React.createClass({

    render: function () {

        var allProducts = this.props.allProducts;
        var productsInCart = this.props.productsInCart;
        var products = [];


        var cartHeaders =
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Cost</td>
                    <td>Quantity</td>
                    <td>Remove</td>
                    <td>Increase</td>
                    <td>Decrease</td>
                    <td>Subtotal</td>
                </tr>
            </thead>;

        _.forIn(productsInCart, function(product, productId) {

            var productData = allProducts[productId];

            products.push(<tr>
                <td>{productData.name}</td>
                <td>{productData.cost}</td>
                <td>{product.quantity}</td>
                <td><RemoveFromCart itemId={productId} /></td>
                <td><IncreaseQuantity itemId={productId} /></td>
                <td><DecreaseQuantity itemId={productId} /></td>
                <td>{product.quantity * productData.cost}</td>
            </tr>);
        });

        return (
            <div>
                <h1>Your Cart</h1>
                <table className="table table-hover">
                    {cartHeaders}
                    <tbody>
                    {products}
                    </tbody>

                </table>
            </div>
        );

        //products.push(<tr><td colSpan="7">{this.props.totalCost}</td></tr>);

    }

});

module.exports = Cart;



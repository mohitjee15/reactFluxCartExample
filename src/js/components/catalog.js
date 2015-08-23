/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/appActions');
var _ = require('lodash');

var AddToCart = require('./addToCart');

var Catalog = React.createClass({

    render: function () {

        var products = [];

        _.forIn(this.props.products, function(product) {
            products.push(<tr>
                <td>{product.name}</td>
                <td>{product.cost}</td>
                <td><AddToCart itemId={product.id} /></td>
            </tr>)
        });

        var catalogHeaders =
            (
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Cost</td>
                        <td>Add To Cart</td>
                    </tr>
                </thead>
            );

        return (
            <div>
                <h1>Catalogue</h1>
                <table className="table table-hover">
                    {catalogHeaders}
                    {products}
                </table>
            </div>
        );

    }

});

module.exports = Catalog;



/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/appActions');

var AddToCart = React.createClass({

    handleClick: function() {
        AppActions.addItem(this.props.itemId);
    },
    render: function () {
        return <button onClick={this.handleClick}>Add To Cart</button>
    }

});

module.exports = AddToCart;



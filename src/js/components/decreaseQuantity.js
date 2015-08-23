/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/appActions');

var DecreaseQuantity = React.createClass({

    handleClick: function() {
        AppActions.decreaseItem(this.props.itemId);
    },
    render: function () {
        return <button onClick={this.handleClick}>-</button>
    }

});

module.exports = DecreaseQuantity;



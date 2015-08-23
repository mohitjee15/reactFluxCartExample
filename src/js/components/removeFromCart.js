/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/appActions');

var RemoveFromCart = React.createClass({

    handleClick: function() {
        AppActions.removeItem(this.props.itemId);
    },
    render: function () {
        return <button onClick={this.handleClick}>X</button>
    }

});

module.exports = RemoveFromCart;



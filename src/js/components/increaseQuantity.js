/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/appActions');

var IncreaseQuantity = React.createClass({

    handleClick: function() {
        AppActions.increaseItem(this.props.itemId);
    },
    render: function () {
        return <button onClick={this.handleClick}>+</button>
    }

});

module.exports = IncreaseQuantity;



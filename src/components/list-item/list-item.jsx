/**
 * @jsx React.DOM
 */

var React = require('react'),
    Divider = require('../divider/divider.jsx');

var ListItem = React.createClass({
    getDefaultProps: function() {
        return {
            className: '',
            divider: true
        };
    },
    
    render: function() {
        return (
            React.createElement('md-item', {className: this.props.className}, 
                React.createElement('md-item-content', {}, this.props.children),
                this.props.divider ? <Divider /> : null
            )
        );
    }
});

module.exports = ListItem;
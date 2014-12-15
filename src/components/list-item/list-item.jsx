/**
 * @jsx React.DOM
 */

var React = require('react');

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
                this.props.divider ? React.createElement('md-divider', {className: 'md-default-theme'}) : null
            )
        );
    }
});

module.exports = ListItem;
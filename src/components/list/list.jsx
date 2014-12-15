/**
 * @jsx React.DOM
 */

var React = require('react');

var List = React.createClass({
    getDefaultProps: function() {
        return {
            className: ''
        };
    },
    
    render: function() {
        return (
            React.createElement('md-list', {className: this.props.className}, this.props.children
            )
        );
    }
});

module.exports = List;
/**
 * @jsx React.DOM
 */

var React = require('react');

var Backdrop = React.createClass({
    
    render: function() {
        return (
            React.createElement('md-backdrop', {className: 'md-default-theme ' + this.props.className, onClick:this.props.onClick}, this.props.children)
        );
    }
});

module.exports = Backdrop;
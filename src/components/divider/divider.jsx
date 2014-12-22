/**
 * @jsx React.DOM
 */

var React = require('react');

var Divider = React.createClass({
    render: function() {
        return (
            React.createElement('md-divider', {className: 'md-default-theme'})
        );
    }
});

module.exports = Divider;
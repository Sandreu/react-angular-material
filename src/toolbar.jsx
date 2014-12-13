/**
 * @jsx React.DOM
 */

var React = require('react');

var Toolbar = React.createClass({
  
    render: function() {
        var classNames = 'md-whiteframe-z' + this.props.zDepth;
        return (
            React.createElement('md-toolbar', {className: 'md-default-theme'}, this.props.children)
        );
    }
});

module.exports = Toolbar;
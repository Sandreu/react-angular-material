/**
 * @jsx React.DOM
 */

var React = require('react');

var Whiteframe = React.createClass({
  
    render: function() {
        var classNames = 'md-whiteframe-z' + this.props.zDepth;
        return (
            React.createElement('md-toolbar', {className: 'md-default-theme'}, this.props.children)
        );
    }
});

module.exports = Whiteframe;
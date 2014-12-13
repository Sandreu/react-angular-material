/**
 * @jsx React.DOM
 */

var React = require('react');

var Toolbar = React.createClass({
  
    propTypes: {
        zDepth: React.PropTypes.number,
    },
    
    getDefaultProps: function() {
        return {
            zDepth: 0,
        };
    },
    
    render: function() {
        return (
            React.createElement('md-toolbar', {className:  + 'md-default-theme md-whiteframe-z' + this.props.zDepth}, this.props.children)
        );
    }
});

module.exports = Toolbar;
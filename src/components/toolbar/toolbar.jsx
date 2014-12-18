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
            className: ''
        };
    },
    
    render: function() {
        var classes = React.addons.classSet({
            'md-default-theme' : true,
        });
        classes += ' md-whiteframe-z' + this.props.zDepth + ' ' + this.props.className;
        return (
            React.createElement('md-toolbar', React.__spread({}, this.props, {className:  classes}), this.props.children)
        );
    }
});

module.exports = Toolbar;
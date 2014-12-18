/**
 * @jsx React.DOM
 */

var React = require('react');

var Content = React.createClass({
    propTypes: {
        padding: React.PropTypes.bool,
        className: React.PropTypes.string
    },
    
    getDefaultProps: function() {
        return {
            padding: false,
            className: ''
        };
    },
  
    render: function() {
        var classes = React.addons.classSet({
            'md-default-theme' : true,
            'md-padding' : this.props.padding
        });
        classes += ' ' + this.props.className;
        var attributes = React.__spread({}, this.props, { className: classes });
        
        return (
            React.createElement('md-content', attributes, this.props.children)
        );
    }
});

module.exports = Content;
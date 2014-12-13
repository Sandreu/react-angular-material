/**
 * @jsx React.DOM
 */

var React = require('react');

var Content = React.createClass({
    propTypes: {
        padding: React.PropTypes.bool
    },
    
    getDefaultProps: function() {
        return {
            padding: true
        };
    },
  
    render: function() {
        var classes = React.addons.classSet({
            'md-default-theme' : true,
            'md-padding' : this.props.padding
        })
        
        return (
            React.createElement('md-content', { className: classes }, this.props.children)
        );
    }
});

module.exports = Content;
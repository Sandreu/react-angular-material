/**
 * @jsx React.DOM
 */

var React = require('react');
    
var ToastMixin = {
    
    contextTypes: {
        toaster: React.PropTypes.func.isRequired
    },
  
    toast: function (props) {
        this.context.toaster(props);
    }
};

module.exports = ToastMixin;
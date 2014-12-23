/**
 * @jsx React.DOM
 */

var React = require('react');
    
var ToastMixin = {
    
    contextTypes: {
        toaster: React.PropTypes.func.isRequired
    },
  
    toast: function () {
        this.context.toaster('test');
    }
};

module.exports = ToastMixin;
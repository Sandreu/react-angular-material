/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var ChildElement = React.createClass({
    mixins: [Md.ToastMixin],
    
    showToast: function () {
        this.toast();   
    },
    
    render: function () {
        return (
            <Md.Button decorator="raised" onClick={this.showToast}>Toast !</Md.Button>
        );
    }
});

var ToastDemo = React.createClass({
    mixins: [Md.ToastContainerMixin],
    
    render: function () {
        return (
            <div style={{minHeight:'500px'}}>
                <ChildElement />
                {this.state.toast}
            </div>
        );
    }
});

module.exports = ToastDemo;
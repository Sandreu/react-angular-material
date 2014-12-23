/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var ChildElement = React.createClass({
    mixins: [Md.ToastMixin],
    
    showSimpleToast: function () {
        this.toast('Hello world !');   
    },
    
    showActionToast: function () {
        this.toast({
            mdContent: 'Message',
            mdAction: 'OK'
        });   
    },
    
    showCustomToast: function () {
        this.toast({
            mdContent: <p>Custom <strong>with bold</strong></p>,
            mdAction: 'OK',
            mdCapsule: true
        });   
    },
    
    render: function () {
        return (
            <div>
                <Md.Button decorator="raised" onClick={this.showSimpleToast}>Simple Toast</Md.Button>
                <Md.Button decorator="raised" onClick={this.showActionToast}>Action Toast</Md.Button>
                <Md.Button decorator="raised" onClick={this.showCustomToast}>Custom Toast</Md.Button>
            </div>
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
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var InputDemo = React.createClass({
    
    rmenu: function () {
        this.refs.rmenu.open();
    },
    lmenu: function () {
        this.refs.lmenu.open();
    },
    
    render: function () {
        return (
            <div>
                <Md.Content padding={true}>
                    <Md.Input label="Name" />
                    <Md.Input label="Address" defaultValue="Default value" />
                </Md.Content>
            </div>
        );
    }
});

module.exports = InputDemo;
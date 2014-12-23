/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var ButtonDemo = React.createClass({
    
    render: function () {
        return (
            <div layout="column" layoutAlign="space-around">
                <div layout="row" layoutAlign="center center" className="demo-well">
                    <Md.Button>Button</Md.Button>
                    <Md.Button primary={true}>Primary</Md.Button>
                    <Md.Button disabled={true}>Disabled</Md.Button>
                    <Md.Button warn={true}>Warn</Md.Button>
                </div>
                <Md.Divider />
                <div layout="row" layoutAlign="center center" className="demo-well">
                    <span className="demo-well-title">decorator="raised"</span>
                    <Md.Button decorator="raised">Button</Md.Button>
                    <Md.Button decorator="raised" primary={true}>Primary</Md.Button>
                    <Md.Button decorator="raised" disabled={true}>Disabled</Md.Button>
                    <Md.Button decorator="raised" warn={true}>Warn</Md.Button>
                </div>
                <Md.Divider />
                <div layout="row" layoutAlign="center center" className="demo-well">
                    <span className="demo-well-title">decorator="fab"</span>
                    <Md.Button decorator="fab">i</Md.Button>
                    <Md.Button decorator="fab" primary={true}>i</Md.Button>
                    <Md.Button decorator="fab" disabled={true}>i</Md.Button>
                    <Md.Button decorator="fab" warn={true}>i</Md.Button>
                </div>
            </div>
        );
    }
});

module.exports = ButtonDemo;
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var ButtonDemo = React.createClass({
    
    render: function () {
        return (
            <div>
                <div layout="row" layoutAlign="center center">
                    <Md.Button>Button</Md.Button>
                    <Md.Button primary={true}>Primary</Md.Button>
                    <Md.Button disabled={true}>Disabled</Md.Button>
                    <Md.Button warn={true}>Warn</Md.Button>
                </div>
                <div layout="row" layoutAlign="center center">
                    <Md.Button decorator="raised">Button</Md.Button>
                    <Md.Button decorator="raised" primary={true}>Primary</Md.Button>
                    <Md.Button decorator="raised" disabled={true}>Disabled</Md.Button>
                    <Md.Button decorator="raised" warn={true}>Warn</Md.Button>
                </div>
                <div layout="row" layoutAlign="center center">
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
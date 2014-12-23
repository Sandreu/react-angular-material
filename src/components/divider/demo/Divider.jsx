/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var DividerDemo = React.createClass({

    
    render: function () {
        return (
            <Md.Content>
                <div className="demo-well">You can put dividers wherever you want</div>
                <Md.Divider />
                <div className="demo-well">They're like a kind of hr...</div>
                <Md.Divider />
                <div layout="row" layoutAlign="right center" className="demo-well">
                    <Md.Button primary={true}>Button example</Md.Button>
                </div>
            </Md.Content>
        );
    }
});

module.exports = DividerDemo;
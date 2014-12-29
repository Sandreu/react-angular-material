/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var DialogDemo = React.createClass({
    mixins: [Md.DialogMixin],
    
    showSimpleDialog: function () {
        this.dialog({
            mdTitle: 'Title example',
            mdActions: 'OK'
        })
    },
    
    render: function () {
        return (
            <div>
                <Md.Button decorator="raised" onClick={this.showSimpleDialog}>Simple Dialog</Md.Button>
            </div>
        );
    }
});

module.exports = DialogDemo;
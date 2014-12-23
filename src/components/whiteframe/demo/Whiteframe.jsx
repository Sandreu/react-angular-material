/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var WhiteframeDemo = React.createClass({
    render: function () {
        var demos = [];
        
        for (var i=1 ; i<=5 ; ++i) {
            demos.push(
                <Md.Whiteframe key={i} zDepth={i} style={{margin: '30px 50px', padding: '20px'}}>
                    <p>zDepth={'{' + i + '}'}</p>
                </Md.Whiteframe>
            );
        }
        return (
            <div>
                {demos}
            </div>
        );
    }
});

module.exports = WhiteframeDemo;
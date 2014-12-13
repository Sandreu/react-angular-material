/**
 * @jsx React.DOM
 */

var React = require('react');

var Whiteframe = React.createClass({
    propTypes: {
        zDepth: React.PropTypes.number
    },
    
    getDefaultProps: function() {
        return {
            zDepth: 1
        };
    },
  
    render: function() {
        var classNames = 'md-whiteframe-z' + this.props.zDepth;
        return (
            <div className={classNames}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Whiteframe;
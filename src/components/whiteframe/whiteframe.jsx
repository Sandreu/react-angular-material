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
            zDepth: 1,
            className: ''
        };
    },
  
    render: function() {
        return (
            <div {...this.props} className={this.props.className +  ' md-whiteframe-z' + this.props.zDepth}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Whiteframe;
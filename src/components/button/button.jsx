/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var Button = React.createClass({
    
    propTypes: {
        className: React.PropTypes.string,
        primary: React.PropTypes.bool,
        warn: React.PropTypes.bool,
        decorator: React.PropTypes.string,
    },
    
    getDefaultProps: function() {
        return {
            className: '',
            onClick: function () {},
            primary: false,
            warn: false,
            decorator: '',
        };
    },
    
    render: function () {
        var classes = React.addons.classSet({
            'md-default-theme' : true,
            'md-button' : true,
            'md-primary' : this.props.primary && !this.props.warn,
            'md-warn' : this.props.warn,
            'md-raised' : this.props.decorator==='raised',
            'md-fab' : this.props.decorator==='fab'
        });
        
        classes += ' ' + this.props.className;
        
        return (
            <button {...this.props} className={classes} onClick={this._click}>
                {this.props.children}
            </button>
        );
    },
    
    _click: function () {
        if (!this.props.disabled) this.props.onClick.apply();
    },
    
});

module.exports = Button;
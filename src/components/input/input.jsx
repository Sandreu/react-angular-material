/**
 * @jsx React.DOM
 */

var React = require('react');
    
var Input = React.createClass({
    
    propTypes: {
        label: React.PropTypes.string,
        defaultValue: React.PropTypes.string,
    },
    
    getDefaultProps: function() {
        return {
            label: '',
            type:'text',
            defaultValue: ''
        };
    },
    
    getInitialState: function () {
        return {
            value: this.props.defaultValue,
            focus: false
        }
    },
    
    onBlur: function () {
        this.setState({focus: false});
        if (this.props.onBlur) this.props.onBlur.apply(null, arguments);
    },

    onFocus: function () {
        this.setState({focus: true});
        if (this.props.onFocus) this.props.onFocus.apply(null, arguments);
    },

    onChange: function (e) {
        this.setState({value: e.target.value});
        if (this.props.onFocus) this.props.onChange.apply(null, arguments);
    },
    
    render: function() {
        var className = React.addons.classSet({
            'md-default-theme' : true,
            'md-input-has-value' : this.state.value,
            'md-input-focused' : this.state.focus,
        });
        return (
            React.createElement('md-input-group', {label: this.props.label, className:className}, 
                <label>{this.props.label}</label>,
                <input {...this.props} ref="input" onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange} />
            )
        );
    },
});

module.exports = Input;
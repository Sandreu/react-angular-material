/**
 * @jsx React.DOM
 */

var React = require('react'),
    Anim = React.addons.CSSTransitionGroup,
    Button = require('../button/button.jsx');

var Toast = React.createClass({
    propTypes: {
        mdVerticalPosition: React.PropTypes.oneOf(['top', 'bottom']),
        mdHorizontalPosition: React.PropTypes.oneOf(['left', 'right']),
        mdContent: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.element
        ]),
        mdAction: React.PropTypes.string,
        mdCapsule: React.PropTypes.bool,
        mdOnAction: React.PropTypes.func
    },
    
    getDefaultProps: function() {
        return {
            mdContent: false,
            mdAction: '',
            mdCapsule: false,
            mdVerticalPosition: 'top',
            mdHorizontalPosition: 'right',
        };
    },
    
    onAction: function () {
        if (this.props.mdOnAction) this.props.mdOnAction();
    },
    
    render: function () {
        var className = React.addons.classSet({
            'md-default-theme' : true,
            'md-capsule' : this.props.mdCapsule,
            'md-left' : this.props.mdHorizontalPosition == 'left',
            'md-right' : this.props.mdHorizontalPosition == 'right',
            'md-top' : this.props.mdVerticalPosition == 'top',
            'md-bottom' : this.props.mdVerticalPosition == 'bottom',
        });
        
        return React.createElement('md-toast', {className: className},
            <span flex {...this.props}>{this.props.mdContent}</span>,
            this.props.mdAction ? <Button onClick={this.onAction}>{this.props.mdAction}</Button> : false
        );
    }
});

var ToastContainerMixin = {
    __count: 0,
    
    childContextTypes: {
        toaster: React.PropTypes.func.isRequired
    },
    
    getChildContext: function () {
        return {
            toaster: this.toast
        };
    },
    
    getInitialState: function () {
        return {
            toast: <Anim transitionName="ng"></Anim>,
        };
    },

    closeToast: function(cb) {
        this.setState({toast: <Anim transitionName="ng"></Anim>});
        if (cb) cb();
    },
    
    toast: function (props) {
        if (typeof props === 'string') props = { mdContent: props };
        
        this.setState({
            toast: (
                <Anim transitionName="ng">
                    <Toast key={++this.__count} {...props} mdOnAction={this.closeToast.bind(this, props.onAction)} />
                </Anim>
            )
        });
    },
};

module.exports = ToastContainerMixin;
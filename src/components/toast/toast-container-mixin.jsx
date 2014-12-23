/**
 * @jsx React.DOM
 */

var React = require('react'),
    Anim = React.addons.CSSTransitionGroup,
    Button = require('../button/button.jsx');

var Toast = React.createClass({
    propTypes: {
        verticalPosition: React.PropTypes.oneOf(['top', 'bottom']),
        horizontalPosition: React.PropTypes.oneOf(['left', 'right']),
        content: React.PropTypes.string,
        action: React.PropTypes.string,
        capsule: React.PropTypes.bool
    },
    
    getDefaultProps: function() {
        return {
            content: '',
            action: '',
            capsule: false,
            verticalPosition: 'top',
            horizontalPosition: 'right',
        };
    },
    
    render: function () {
        var className = React.addons.classSet({
            'md-default-theme' : true,
            'md-capsule' : this.props.capsule,
            'md-left' : this.props.horizontalPosition == 'left',
            'md-right' : this.props.horizontalPosition == 'right',
            'md-top' : this.props.verticalPosition == 'top',
            'md-bottom' : this.props.verticalPosition == 'bottom',
        });
        return React.createElement('md-toast', {className: className},
            <span flex>{this.props.content}</span>,
            this.props.action ? <Button>{this.props.action}</Button> : false
        );
    }
});

var count = 0;

var ToastContainerMixin = {
    childContextTypes: {
        toaster: React.PropTypes.func.isRequired
    },
    
    getChildContext: function () {
        return {
            toaster: this.addToast
        };
    },
    
    getInitialState: function () {
        return {
            toast: false,
        };
    },

    addToast: function (content) {
        this.setState({
            toast: (
                <Anim transitionName="ng">
                    <Toast key={++count} content={content} />
                </Anim>
            )
        });
    },
};

module.exports = ToastContainerMixin;
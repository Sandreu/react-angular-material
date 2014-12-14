/**
 * @jsx React.DOM
 */

var React = require('react'),
    Anim = React.addons.CSSTransitionGroup,
    
    
    ClassTransitionsMixin = require('./_classTransitions.jsx'),
    Backdrop = require('./backdrop.jsx');
    
var Sidenav = React.createClass({
    mixins: [ClassTransitionsMixin],
    
    propTypes: {
        backdrop: React.PropTypes.bool,
        openOnStartup: React.PropTypes.bool,
        zDepth: React.PropTypes.number,
        side: function(props, propName, componentName) {
            if (!/left|right/.test(props[propName])) {
                return new Error('Nav side is left or right only !');
            }
        }
    },
    
    getDefaultProps: function() {
        return {
            side: 'left',
            zDepth: 1,
            openOnStartup: false,
            backdrop: true
        };
    },
    
    getInitialState: function () {
        return {
            open : this.props.openOnStartup
        }
    },
    
    open: function () {
        this.setState({ open: true });
        this.removeClassTransition(this.refs.sidebar.getDOMNode(), 'md-closed');
    },
    close: function () {
        this.setState({ open: false });
        this.addClassTransition(this.refs.sidebar.getDOMNode(), 'md-closed');
    },
    
    isOpen: function () { return this.state.open; },
    
    render: function() {
        var Bd ='',
            classes = React.addons.classSet({
                'md-default-theme' : true,
                'md-sidenav-right' : this.props.side == 'right',
                'md-sidenav-left' : this.props.side == 'left',
                
            });
        
        if (this.props.backdrop && this.state.open) Bd = <Backdrop key={0} className="md-sidenav-backdrop md-opaque" onClick={this.close} />;
        
        return (
            React.createElement('div', null,
                <Anim transitionName="ng">{Bd}</Anim>,
                React.createElement('md-sidenav', {
                    ref: 'sidebar',
                    className: classes + ' md-whiteframe-z' + this.props.zDepth
                }, this.props.children)
            )
        );
    },
});

module.exports = Sidenav;
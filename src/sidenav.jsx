/**
 * @jsx React.DOM
 */

var React = require('react'),
    Anim = React.addons.CSSTransitionGroup,
    Backdrop = require('./backdrop.jsx');

var Sidenav = React.createClass({
  
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
    
    toggle: function () { this.setState({ open: !this.state.open }); },
    open: function () { this.setState({ open: true }); },
    close: function () { this.setState({ open: false }); },
    
    isOpen: function () { return this.state.isOpen(); },
    
    render: function() {
        var Bd ='',
            classes = React.addons.classSet({
                'md-default-theme' : true,
                'md-closed' : !this.state.open,
                'md-sidenav-right' : this.props.side == 'right',
                'md-sidenav-left' : this.props.side == 'left',
                
            });
        
        if (this.props.backdrop && this.state.open) Bd = <Backdrop key={0} className="md-sidenav-backdrop md-opaque" onClick={this.close} />;
        
        return (
            React.createElement('div', null,
                <Anim transitionName="ng">{Bd}</Anim>,
                React.createElement('md-sidenav', {
                    className: classes + ' md-whiteframe-z' + this.props.zDepth
                }, this.props.children)
            )
        );
    }
});

module.exports = Sidenav;
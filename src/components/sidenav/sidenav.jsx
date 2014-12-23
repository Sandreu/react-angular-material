/**
 * @jsx React.DOM
 */

var React = require('react'),
    Anim = React.addons.CSSTransitionGroup,
    
    
    ClassTransitionsMixin = require('../../mixins/classTransitions.jsx'),
    Backdrop = require('../backdrop/backdrop.jsx');
    
var Sidenav = React.createClass({
    mixins: [ClassTransitionsMixin],
    
    propTypes: {
        backdrop: React.PropTypes.bool,
        lockOpen: React.PropTypes.bool,
        openOnStartup: React.PropTypes.bool,
        zDepth: React.PropTypes.number,
        side: React.PropTypes.oneOf(['left', 'right'])
    },
    
    getDefaultProps: function() {
        return {
            side: 'left',
            lockOpen: false,
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
        this.removeClassTransition(this.refs.sidenav.getDOMNode(), 'md-closed');
    },
    close: function () {
        this.setState({ open: false });
        this.addClassTransition(this.refs.sidenav.getDOMNode(), 'md-closed');
    },
    
    isOpen: function () { return this.state.open; },
    
    render: function() {
        var out,
            sidenav_classes = React.addons.classSet({
                'md-default-theme' : true,
                'md-closed' : !this.props.open,
                'md-sidenav-right' : this.props.side == 'right',
                'md-sidenav-left' : this.props.side == 'left',
                'md-locked-open' : this.props.lockOpen
            }),
            sidenav = React.createElement('md-sidenav', React.__spread({}, this.props, {
                ref: 'sidenav',
                className: sidenav_classes + ' md-whiteframe-z' + this.props.zDepth
            }), this.props.children);
            
        if (this.props.lockOpen) {
            out = sidenav;
        } else {
            var Bd = null;
            
            if (this.props.backdrop && this.state.open) {
                Bd = <Backdrop key={0} className="md-sidenav-backdrop md-opaque" onClick={this.close} />;
            }
            
            out = React.createElement('div', null,
                <Anim transitionName="ng">{Bd}</Anim>,
                sidenav
            )
        }
        
        return out;
    },
});

module.exports = Sidenav;
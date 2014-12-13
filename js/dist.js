require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react');

var Backdrop = React.createClass({displayName: 'Backdrop',
    
    render: function() {
        return (
            React.createElement('md-backdrop', {className: 'md-default-theme ' + this.props.className, onClick:this.props.onClick}, this.props.children)
        );
    }
});

module.exports = Backdrop;
},{"react":"react"}],2:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react');

var Content = React.createClass({displayName: 'Content',
    propTypes: {
        padding: React.PropTypes.bool
    },
    
    getDefaultProps: function() {
        return {
            padding: true
        };
    },
  
    render: function() {
        var classes = React.addons.classSet({
            'md-default-theme' : true,
            'md-padding' : this.props.padding
        })
        
        return (
            React.createElement('md-content', { className: classes }, this.props.children)
        );
    }
});

module.exports = Content;
},{"react":"react"}],3:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Anim = React.addons.CSSTransitionGroup,
    Backdrop = require('./backdrop.jsx');

var Sidenav = React.createClass({displayName: 'Sidenav',
  
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
        
        if (this.props.backdrop && this.state.open) Bd = React.createElement(Backdrop, {key: 0, className: "md-sidenav-backdrop md-opaque", onClick: this.close});
        
        return (
            React.createElement('div', null,
                React.createElement(Anim, {transitionName: "ng"}, Bd),
                React.createElement('md-sidenav', {
                    className: classes + ' md-whiteframe-z' + this.props.zDepth
                }, this.props.children)
            )
        );
    }
});

module.exports = Sidenav;
},{"./backdrop.jsx":1,"react":"react"}],4:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react');

var Toolbar = React.createClass({displayName: 'Toolbar',
  
    propTypes: {
        zDepth: React.PropTypes.number,
    },
    
    getDefaultProps: function() {
        return {
            zDepth: 0,
        };
    },
    
    render: function() {
        return (
            React.createElement('md-toolbar', {className:  'md-default-theme md-whiteframe-z' + this.props.zDepth}, this.props.children)
        );
    }
});

module.exports = Toolbar;
},{"react":"react"}],5:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react');

var Whiteframe = React.createClass({displayName: 'Whiteframe',
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
            React.createElement("div", {className: classNames}, 
                this.props.children
            )
        );
    }
});

module.exports = Whiteframe;
},{"react":"react"}],"react-md":[function(require,module,exports){
module.exports = {
    Backdrop: require('./src/backdrop.jsx'),
    Content: require('./src/content.jsx'),
    Sidenav: require('./src/sidenav.jsx'),
    Toolbar: require('./src/toolbar.jsx'),
    Whiteframe: require('./src/whiteframe.jsx'),
};
},{"./src/backdrop.jsx":1,"./src/content.jsx":2,"./src/sidenav.jsx":3,"./src/toolbar.jsx":4,"./src/whiteframe.jsx":5}]},{},[]);

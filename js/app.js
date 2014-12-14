(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');

var Layout = React.createClass({displayName: 'Layout',
    menu: function () {
        this.refs.menu.open();
    },
    
    render: function () {
        
        return (
            React.createElement("div", null, 
                React.createElement(Md.Toolbar, null, 
                    React.createElement("h2", {className: "md-toolbar-tools", onClick: this.menu}, 
                        React.createElement("span", null, "React Material Design")
                    )
                ), 
                
                React.createElement(Md.Sidenav, {ref: "menu", side: "left", zDepth: 2, openOnStartup: true}, 
            
                    React.createElement(Md.Toolbar, null, 
                        React.createElement("h1", {className: "md-toolbar-tools"}, "Sidenav Left")
                    ), 
                    React.createElement(Md.Content, null, 
                        React.createElement("p", null, 
                        "This sidenav is locked open on your device. To go back to the default behavior," + ' ' +
                        "narrow your display."
                        )
                    )
            
                )
            )
        );
    }
});

React.render(
    React.createElement(Layout, null),
    document.body
);

//Needed for React Developer Tools
window.React = React;

},{"react":"react","react-md":"react-md"}]},{},[1]);

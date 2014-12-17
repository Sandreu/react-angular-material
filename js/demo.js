require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-md-demo/Sidenav":[function(require,module,exports){
var React = require('react'),
    Md = require('react-md');
    
var SidenavDemo = React.createClass({displayName: 'SidenavDemo',
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("p", {onClick: this.menu}, 
                    "Click To Open sidenav"
                ), 
                React.createElement(Md.Sidenav, {ref: "menu", side: "right"}, 
                    React.createElement(Md.List, null, 
                        React.createElement(Md.ListItem, null, 
                            React.createElement("div", {className: "md-tile-content"}, 
                                React.createElement("h3", null, "Title 1"), 
                                React.createElement("h4", null, "Title 2"), 
                                React.createElement("p", null, 
                                    "Notes list"
                                )
                            )
                        ), 
                        React.createElement(Md.ListItem, null, 
                            React.createElement("div", {className: "md-tile-content"}, 
                                React.createElement("h3", null, "Title 1"), 
                                React.createElement("h4", null, "Title 2"), 
                                React.createElement("p", null, 
                                    "Notes list"
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = SidenavDemo;
},{"react":"react","react-md":"react-md"}],"react-md-demo":[function(require,module,exports){
module.exports = [{"module":"Sidenav","source":"var React = require('react'),\n    Md = require('react-md');\n    \nvar SidenavDemo = React.createClass({\n    render: function () {\n        return (\n            <div>\n                <p onClick={this.menu}>\n                    Click To Open sidenav\n                </p>\n                <Md.Sidenav ref=\"menu\" side=\"right\">\n                    <Md.List>\n                        <Md.ListItem>\n                            <div className=\"md-tile-content\">\n                                <h3>Title 1</h3>\n                                <h4>Title 2</h4>\n                                <p>\n                                    Notes list\n                                </p>\n                            </div>\n                        </Md.ListItem>\n                        <Md.ListItem>\n                            <div className=\"md-tile-content\">\n                                <h3>Title 1</h3>\n                                <h4>Title 2</h4>\n                                <p>\n                                    Notes list\n                                </p>\n                            </div>\n                        </Md.ListItem>\n                    </Md.List>\n                </Md.Sidenav>\n            </div>\n        );\n    }\n});\n\nmodule.exports = SidenavDemo;"}]
},{}]},{},[]);

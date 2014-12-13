/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');

React.render(
    <Md.Toolbar>
        <h2 className="md-toolbar-tools">
            <span>Toolbar: light-theme (default)</span>
        </h2>
    </Md.Toolbar>,
    document.body
);

//Needed for React Developer Tools
window.React = React;

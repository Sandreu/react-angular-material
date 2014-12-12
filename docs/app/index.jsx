/**
 * @jsx React.DOM
 */

var React = require('react'),
    ReactMaterial = require('react-md');

React.render(
    <ReactMaterial.Whiteframe>Hello, world!</ReactMaterial.Whiteframe>,
    document.body
);

//Needed for React Developer Tools
window.React = React;

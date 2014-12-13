/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');

React.render(
    <div>
        <Md.Toolbar>
            <h2 className="md-toolbar-tools">
                <span>Toolbar: light-theme (default)</span>
            </h2>
        </Md.Toolbar>
        
        <Md.Sidenav side="left" zDepth={2}>
    
            <Md.Toolbar>
                <h1 className="md-toolbar-tools">Sidenav Left</h1>
            </Md.Toolbar>
            <Md.Content>
                <p>
                This sidenav is locked open on your device. To go back to the default behavior,
                narrow your display.
                </p>
            </Md.Content>
    
        </Md.Sidenav>
    </div>,
    document.body
);

//Needed for React Developer Tools
window.React = React;

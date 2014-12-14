/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');

var Layout = React.createClass({
    menu: function () {
        this.refs.menu.open();
    },
    
    render: function () {
        
        return (
            <div>
                <Md.Toolbar>
                    <h2 className="md-toolbar-tools" onClick={this.menu}>
                        <span>React Material Design</span>
                    </h2>
                </Md.Toolbar>
                
                <Md.Sidenav ref="menu" side="left" zDepth={2} openOnStartup={true}>
            
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
            </div>
        );
    }
});

React.render(
    <Layout />,
    document.body
);

//Needed for React Developer Tools
window.React = React;


/**
 * @jsx React.DOM
 */
 
var React = require('react'),
    RouteHandler = require('react-router').RouteHandler,
    Md = require('react-md');

var Layout = React.createClass({
    menu: function () {
        this.refs.menu.open();
    },
    
    render: function () {
        
        return (
            <div layout="row" style={{height:'100%'}}>
            
                <Md.Sidenav lockOpen={true} zDepth={2} openOnStartup={true}>
            
                    <Md.Toolbar>
                        <h1 className="md-toolbar-tools">Sidenav Left</h1>
                    </Md.Toolbar>
                    <Md.Content>
                        <a className="menu-item">Sidenav</a>
                        <a className="menu-item">Toolbar</a>
                    </Md.Content>
            
                </Md.Sidenav>
                
                <Md.Content layoutFill>
                    <Md.Toolbar>
                        <h2 className="md-toolbar-tools">
                            <span>React Material Design</span>
                        </h2>
                    </Md.Toolbar>
                    
                    <Md.Content padding={true} layout="column">
                        <Md.Whiteframe className="demo-container" layoutFill>
                            <Md.Toolbar>
                                <h2 className="md-toolbar-tools">
                                    <span>React Material Design</span>
                                </h2>
                            </Md.Toolbar>
                            <Md.Content padding={true} style={{ overflow: 'hidden', minHeight: '300px' }}>
                                <RouteHandler/>
                            </Md.Content>
                        </Md.Whiteframe>
                    </Md.Content>
                </Md.Content>
            </div>
        );
    }
});


module.exports = Layout;
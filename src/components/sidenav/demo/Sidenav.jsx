/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var SidenavDemo = React.createClass({
    
    rmenu: function () {
        this.refs.rmenu.open();
    },
    lmenu: function () {
        this.refs.lmenu.open();
    },
    
    render: function () {
        return (
            <div>
                <Md.Content padding={true}>
                    <p>
                        You can make Sidenavs appear
                    </p>
                    <Md.Button decorator="raised" onClick={this.lmenu}>Left sidenav</Md.Button>
                    <Md.Button decorator="raised" onClick={this.rmenu}>Right sidenav</Md.Button>
                </Md.Content>
                <Md.Sidenav ref="lmenu">
                    <Md.Toolbar>
                        <h1 className="md-toolbar-tools md-toolbar-tools-bottom">Sidenav title</h1>
                    </Md.Toolbar>
                    <Md.Content padding={true}>
                        <p>You can put here whatever you like</p>
                    </Md.Content>
                </Md.Sidenav>
                <Md.Sidenav ref="rmenu" side="right">
                    <Md.Content>
                        <Md.List>
                            <Md.ListItem>
                                <h3>Title</h3>
                                <h4>Subtitle</h4>
                                <p>
                                    Notes list
                                </p>
                            </Md.ListItem>
                            <Md.ListItem>
                                <h3>Title</h3>
                                <h4>Subtitle</h4>
                                <p>
                                    Notes list
                                </p>
                            </Md.ListItem>
                        </Md.List>
                    </Md.Content>
                </Md.Sidenav>
            </div>
        );
    }
});

module.exports = SidenavDemo;
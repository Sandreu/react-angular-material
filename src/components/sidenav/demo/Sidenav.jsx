var React = require('react'),
    Md = require('react-md');
    
var SidenavDemo = React.createClass({
    render: function () {
        return (
            <div>
                <p onClick={this.menu}>
                    Click To Open sidenav
                </p>
                <Md.Sidenav ref="menu" side="right">
                    <Md.List>
                        <Md.ListItem>
                            <div className="md-tile-content">
                                <h3>Title 1</h3>
                                <h4>Title 2</h4>
                                <p>
                                    Notes list
                                </p>
                            </div>
                        </Md.ListItem>
                        <Md.ListItem>
                            <div className="md-tile-content">
                                <h3>Title 1</h3>
                                <h4>Title 2</h4>
                                <p>
                                    Notes list
                                </p>
                            </div>
                        </Md.ListItem>
                    </Md.List>
                </Md.Sidenav>
            </div>
        );
    }
});

module.exports = SidenavDemo;
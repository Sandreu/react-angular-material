/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var SidenavDemo = React.createClass({
    menu: function () {
        this.refs.menu.open();
    },
    
    render: function () {
        return (
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
        );
    }
});

module.exports = SidenavDemo;
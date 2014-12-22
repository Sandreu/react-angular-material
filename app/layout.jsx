
/**
 * @jsx React.DOM
 */
 
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Md = require('react-md')
    Demo = require('react-md-demo');

var Layout = React.createClass({
    mixins: [Router.Navigation],
    
    render: function () {
        var Menu = Demo.map(function (item, i) {
            return <a key={i} href={this.makeHref('Components.' + item.module)} className="menu-item">{item.module}</a>
        }.bind(this));
        return (
            <div layout="column">
                <Md.Toolbar className="md-tall" zDepth={2} style={{zIndex:1}}>
                    <span flex />
                    <h1 className="md-toolbar-tools md-toolbar-tools-bottom">React MD</h1>
                </Md.Toolbar>
                <div layoutFill layout="row" style={{height:'100%'}}>
                    <Md.Sidenav lockOpen={true} zDepth={0} style={{zIndex:0}}>
                        <Md.Content>
                            {Menu}
                        </Md.Content>
                    </Md.Sidenav>
                    
                    <Md.Whiteframe layoutFill className="demo-container" style={{margin:'-85px 0 20px 0', zIndex:2}}>
                        <Md.Content layout="column">
                            <Md.Toolbar className="main-toolbar">
                                <h2 className="md-toolbar-tools">
                                    <span>Title</span>
                                </h2>
                            </Md.Toolbar>
                            <Md.Content style={{ overflow: 'hidden', minHeight: '300px' }}>
                                <RouteHandler/>
                            </Md.Content>
                        </Md.Content>
                    </Md.Whiteframe>
                    <div style={{width: '100px'}} />
                </div>
            </div>
        );
    }
});


module.exports = Layout;
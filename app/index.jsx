/**
 * @jsx React.DOM
 */
 
var DOMProps = require('vendor-exposes').HTMLDOMPropertyConfig;
    
DOMProps.Properties.layout = null;
DOMProps.Properties.flex = null;
DOMProps.Properties['layoutPadding'] = null;
DOMProps.DOMAttributeNames['layoutPadding'] = 'layout-padding';
DOMProps.Properties['layoutMargin'] = null;
DOMProps.DOMAttributeNames['layoutMargin'] = 'layout-margin';
DOMProps.Properties['layoutWrap'] = null;
DOMProps.DOMAttributeNames['layoutWrap'] = 'layout-wrap';
DOMProps.Properties['layoutFill'] = null;
DOMProps.DOMAttributeNames['layoutFill'] = 'layout-fill';
DOMProps.Properties['layoutAlign'] = null;
DOMProps.DOMAttributeNames['layoutAlign'] = 'layout-align';
DOMProps.Properties['flexOrder'] = null;
DOMProps.DOMAttributeNames['flexOrder'] = 'flex-order';


var React = require('react'),
    Router = require('react-router'),
    Md = require('react-md'),
    Layout = require('./layout.jsx'),
    Route = Router.Route,
    
    
    demos = require('react-md-demo');


var components_demo = demos.map(function (item, i) {
    return <Route key={i} name={'Demo.' + item.module} handler={require('react-md-demo/' + item.module)} />
});


var routes = (
    <Route handler={Layout} path="/">
        {components_demo}
        <Router.DefaultRoute handler={require('react-md-demo/' + demos[0].module)} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});

//Needed for React Developer Tools
window.React = React;

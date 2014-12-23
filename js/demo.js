require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-md-demo/Button":[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var ButtonDemo = React.createClass({displayName: "ButtonDemo",
    
    render: function () {
        return (
            React.createElement("div", {layout: "column", layoutAlign: "space-around", className: "demo-buttons"}, 
                React.createElement("div", {layout: "row", layoutAlign: "center center", className: "demo-well"}, 
                    React.createElement(Md.Button, null, "Button"), 
                    React.createElement(Md.Button, {primary: true}, "Primary"), 
                    React.createElement(Md.Button, {disabled: true}, "Disabled"), 
                    React.createElement(Md.Button, {warn: true}, "Warn")
                ), 
                React.createElement(Md.Divider, null), 
                React.createElement("div", {layout: "row", layoutAlign: "center center", className: "demo-well"}, 
                    React.createElement("span", {className: "demo-well-title"}, "decorator=\"raised\""), 
                    React.createElement(Md.Button, {decorator: "raised"}, "Button"), 
                    React.createElement(Md.Button, {decorator: "raised", primary: true}, "Primary"), 
                    React.createElement(Md.Button, {decorator: "raised", disabled: true}, "Disabled"), 
                    React.createElement(Md.Button, {decorator: "raised", warn: true}, "Warn")
                ), 
                React.createElement(Md.Divider, null), 
                React.createElement("div", {layout: "row", layoutAlign: "center center", className: "demo-well"}, 
                    React.createElement("span", {className: "demo-well-title"}, "decorator=\"fab\""), 
                    React.createElement(Md.Button, {decorator: "fab"}, "i"), 
                    React.createElement(Md.Button, {decorator: "fab", primary: true}, "i"), 
                    React.createElement(Md.Button, {decorator: "fab", disabled: true}, "i"), 
                    React.createElement(Md.Button, {decorator: "fab", warn: true}, "i")
                )
            )
        );
    }
});

module.exports = ButtonDemo;
},{"react":"react","react-md":"react-md"}],"react-md-demo/Content":[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var ContentDemo = React.createClass({displayName: "ContentDemo",

    
    render: function () {
        return (
            React.createElement(Md.Content, {padding: true, style: {height:'500px'}}, 
                React.createElement("p", null, "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent reformidans no. Sed laudem aliquam ne."), 
                React.createElement("p", null, "Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent."), 
                React.createElement("p", null, "Ad sea dolor accusata consequuntur. Sit facete convenire reprehendunt et. Usu cu nonumy dissentiet, mei choro omnes fuisset ad. Te qui docendi accusam efficiantur, doming noster prodesset eam ei. In vel posse movet, ut convenire referrentur eum, ceteros singulis intellegam eu sit."), 
                React.createElement("p", null, "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his, solum virtute recteque et cum. Vel cu luptatum signiferumque, mel eu brute nostro senserit. Blandit euripidis consequat ex mei, atqui torquatos id cum, meliore luptatum ut usu. Cu zril perpetua gubergren pri. Accusamus rationibus instructior ei pro, eu nullam principes qui, reque justo omnes et quo."), 
                React.createElement("p", null, "Sint unum eam id. At sit fastidii theophrastus, mutat senserit repudiare et has. Atqui appareat repudiare ad nam, et ius alii incorrupte. Alii nullam libris his ei, meis aeterno at eum. Ne aeque tincidunt duo. In audire malorum mel, tamquam efficiantur has te."), 
                React.createElement("p", null, "Qui utamur tacimates quaestio ad, quod graece omnium ius ut. Pri ut vero debitis interpretaris, qui cu mentitum adipiscing disputationi. Voluptatum mediocritatem quo ut. Fabulas dolorem ei has, quem molestie persequeris et sit."), 
                React.createElement("p", null, "Est in vivendum comprehensam conclusionemque, alia cetero iriure no usu, te cibo deterruisset pro. Ludus epicurei quo id, ex cum iudicabit intellegebat. Ex modo deseruisse quo, mel noster menandri sententiae ea, duo et tritani malorum recteque. Nullam suscipit partiendo nec id, indoctum vulputate per ex. Et has enim habemus tibique. Cu latine electram cum, ridens propriae intellegat eu mea."), 
                React.createElement("p", null, "Duo at aliquid mnesarchum, nec ne impetus hendrerit. Ius id aeterno debitis atomorum, et sed feugait voluptua, brute tibique no vix. Eos modo esse ex, ei omittam imperdiet pro. Vel assum albucius incorrupte no. Vim viris prompta repudiare ne, vel ut viderer scripserit, dicant appetere argumentum mel ea. Eripuit feugait tincidunt pri ne, cu facilisi molestiae usu."), 
                React.createElement("p", null, "Qui utamur tacimates quaestio ad, quod graece omnium ius ut. Pri ut vero debitis interpretaris, qui cu mentitum adipiscing disputationi. Voluptatum mediocritatem quo ut. Fabulas dolorem ei has, quem molestie persequeris et sit."), 
                React.createElement("p", null, "Est in vivendum comprehensam conclusionemque, alia cetero iriure no usu, te cibo deterruisset pro. Ludus epicurei quo id, ex cum iudicabit intellegebat. Ex modo deseruisse quo, mel noster menandri sententiae ea, duo et tritani malorum recteque. Nullam suscipit partiendo nec id, indoctum vulputate per ex. Et has enim habemus tibique. Cu latine electram cum, ridens propriae intellegat eu mea."), 
                React.createElement("p", null, "Duo at aliquid mnesarchum, nec ne impetus hendrerit. Ius id aeterno debitis atomorum, et sed feugait voluptua, brute tibique no vix. Eos modo esse ex, ei omittam imperdiet pro. Vel assum albucius incorrupte no. Vim viris prompta repudiare ne, vel ut viderer scripserit, dicant appetere argumentum mel ea. Eripuit feugait tincidunt pri ne, cu facilisi molestiae usu.")
            )
        );
    }
});

module.exports = ContentDemo;
},{"react":"react","react-md":"react-md"}],"react-md-demo/Divider":[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var DividerDemo = React.createClass({displayName: "DividerDemo",

    
    render: function () {
        return (
            React.createElement(Md.Content, null, 
                React.createElement("div", {className: "demo-well"}, "You can put dividers wherever you want"), 
                React.createElement(Md.Divider, null), 
                React.createElement("div", {className: "demo-well"}, "They're like a kind of hr..."), 
                React.createElement(Md.Divider, null), 
                React.createElement("div", {layout: "row", layoutAlign: "right center", className: "demo-well"}, 
                    React.createElement(Md.Button, {primary: true}, "Button example")
                )
            )
        );
    }
});

module.exports = DividerDemo;
},{"react":"react","react-md":"react-md"}],"react-md-demo/Input":[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var InputDemo = React.createClass({displayName: "InputDemo",
    
    rmenu: function () {
        this.refs.rmenu.open();
    },
    lmenu: function () {
        this.refs.lmenu.open();
    },
    
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Md.Content, {padding: true}, 
                    React.createElement(Md.Input, {label: "Name"}), 
                    React.createElement(Md.Input, {label: "Address", defaultValue: "Default value"})
                )
            )
        );
    }
});

module.exports = InputDemo;
},{"react":"react","react-md":"react-md"}],"react-md-demo/List":[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var SidenavDemo = React.createClass({displayName: "SidenavDemo",
    menu: function () {
        this.refs.menu.open();
    },
    
    render: function () {
        return (
            React.createElement(Md.List, null, 
                React.createElement(Md.ListItem, null, 
                    React.createElement("h3", null, "Title"), 
                    React.createElement("h4", null, "Subtitle"), 
                    React.createElement("p", null, 
                        "Notes list"
                    )
                ), 
                React.createElement(Md.ListItem, null, 
                    React.createElement("h3", null, "Title"), 
                    React.createElement("h4", null, "Subtitle"), 
                    React.createElement("p", null, 
                        "Notes list"
                    )
                ), 
                React.createElement(Md.ListItem, null, 
                    React.createElement("h3", null, "Title"), 
                    React.createElement("h4", null, "Subtitle"), 
                    React.createElement("p", null, 
                        "Notes list"
                    )
                ), 
                React.createElement(Md.ListItem, null, 
                    React.createElement("h3", null, "Title"), 
                    React.createElement("h4", null, "Subtitle"), 
                    React.createElement("p", null, 
                        "Notes list"
                    )
                ), 
                React.createElement(Md.ListItem, null, 
                    React.createElement("h3", null, "Title"), 
                    React.createElement("h4", null, "Subtitle"), 
                    React.createElement("p", null, 
                        "Notes list"
                    )
                ), 
                React.createElement(Md.ListItem, null, 
                    React.createElement("h3", null, "Title"), 
                    React.createElement("h4", null, "Subtitle"), 
                    React.createElement("p", null, 
                        "Notes list"
                    )
                ), 
                React.createElement(Md.ListItem, null, 
                    React.createElement("h3", null, "Title"), 
                    React.createElement("h4", null, "Subtitle"), 
                    React.createElement("p", null, 
                        "Notes list"
                    )
                ), 
                React.createElement(Md.ListItem, null, 
                    React.createElement("h3", null, "Title"), 
                    React.createElement("h4", null, "Subtitle"), 
                    React.createElement("p", null, 
                        "Notes list"
                    )
                )
            )
        );
    }
});

module.exports = SidenavDemo;
},{"react":"react","react-md":"react-md"}],"react-md-demo/Sidenav":[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var SidenavDemo = React.createClass({displayName: "SidenavDemo",
    
    rmenu: function () {
        this.refs.rmenu.open();
    },
    lmenu: function () {
        this.refs.lmenu.open();
    },
    
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Md.Content, {padding: true}, 
                    React.createElement("p", null, 
                        "You can make Sidenavs appear"
                    ), 
                    React.createElement(Md.Button, {decorator: "raised", onClick: this.lmenu}, "Left sidenav"), 
                    React.createElement(Md.Button, {decorator: "raised", onClick: this.rmenu}, "Right sidenav")
                ), 
                React.createElement(Md.Sidenav, {ref: "lmenu"}, 
                    React.createElement(Md.Toolbar, null, 
                        React.createElement("h1", {className: "md-toolbar-tools md-toolbar-tools-bottom"}, "Sidenav title")
                    ), 
                    React.createElement(Md.Content, {padding: true}, 
                        React.createElement("p", null, "You can put here whatever you like")
                    )
                ), 
                React.createElement(Md.Sidenav, {ref: "rmenu", side: "right"}, 
                    React.createElement(Md.Content, null, 
                        React.createElement(Md.List, null, 
                            React.createElement(Md.ListItem, null, 
                                React.createElement("h3", null, "Title"), 
                                React.createElement("h4", null, "Subtitle"), 
                                React.createElement("p", null, 
                                    "Notes list"
                                )
                            ), 
                            React.createElement(Md.ListItem, null, 
                                React.createElement("h3", null, "Title"), 
                                React.createElement("h4", null, "Subtitle"), 
                                React.createElement("p", null, 
                                    "Notes list"
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = SidenavDemo;
},{"react":"react","react-md":"react-md"}],"react-md-demo/Toast":[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var ChildElement = React.createClass({displayName: "ChildElement",
    mixins: [Md.ToastMixin],
    
    showSimpleToast: function () {
        this.toast('Hello world !');   
    },
    
    showActionToast: function () {
        this.toast({
            mdContent: 'Message',
            mdAction: 'OK'
        });   
    },
    
    showCustomToast: function () {
        this.toast({
            mdContent: React.createElement("p", null, "Custom ", React.createElement("strong", null, "with bold")),
            mdAction: 'OK',
            mdCapsule: true
        });   
    },
    
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Md.Button, {decorator: "raised", onClick: this.showSimpleToast}, "Simple Toast"), 
                React.createElement(Md.Button, {decorator: "raised", onClick: this.showActionToast}, "Action Toast"), 
                React.createElement(Md.Button, {decorator: "raised", onClick: this.showCustomToast}, "Custom Toast")
            )
        );
    }
});

var ToastDemo = React.createClass({displayName: "ToastDemo",
    mixins: [Md.ToastContainerMixin],
    
    render: function () {
        return (
            React.createElement("div", {style: {minHeight:'500px'}}, 
                React.createElement(ChildElement, null), 
                this.state.toast
            )
        );
    }
});

module.exports = ToastDemo;
},{"react":"react","react-md":"react-md"}],"react-md-demo/Whiteframe":[function(require,module,exports){
/**
 * @jsx React.DOM
 */

var React = require('react'),
    Md = require('react-md');
    
var WhiteframeDemo = React.createClass({displayName: "WhiteframeDemo",
    render: function () {
        var demos = [];
        
        for (var i=1 ; i<=5 ; ++i) {
            demos.push(
                React.createElement(Md.Whiteframe, {key: i, zDepth: i, style: {margin: '30px 50px', padding: '20px'}}, 
                    React.createElement("p", null, "zDepth=", '{' + i + '}')
                )
            );
        }
        return (
            React.createElement("div", null, 
                demos
            )
        );
    }
});

module.exports = WhiteframeDemo;
},{"react":"react","react-md":"react-md"}],"react-md-demo":[function(require,module,exports){
module.exports = [{"module":"Button","source":"/**\n * @jsx React.DOM\n */\n\nvar React = require('react'),\n    Md = require('react-md');\n    \nvar ButtonDemo = React.createClass({\n    \n    render: function () {\n        return (\n            <div layout=\"column\" layoutAlign=\"space-around\" className=\"demo-buttons\">\n                <div layout=\"row\" layoutAlign=\"center center\" className=\"demo-well\">\n                    <Md.Button>Button</Md.Button>\n                    <Md.Button primary={true}>Primary</Md.Button>\n                    <Md.Button disabled={true}>Disabled</Md.Button>\n                    <Md.Button warn={true}>Warn</Md.Button>\n                </div>\n                <Md.Divider />\n                <div layout=\"row\" layoutAlign=\"center center\" className=\"demo-well\">\n                    <span className=\"demo-well-title\">decorator=\"raised\"</span>\n                    <Md.Button decorator=\"raised\">Button</Md.Button>\n                    <Md.Button decorator=\"raised\" primary={true}>Primary</Md.Button>\n                    <Md.Button decorator=\"raised\" disabled={true}>Disabled</Md.Button>\n                    <Md.Button decorator=\"raised\" warn={true}>Warn</Md.Button>\n                </div>\n                <Md.Divider />\n                <div layout=\"row\" layoutAlign=\"center center\" className=\"demo-well\">\n                    <span className=\"demo-well-title\">decorator=\"fab\"</span>\n                    <Md.Button decorator=\"fab\">i</Md.Button>\n                    <Md.Button decorator=\"fab\" primary={true}>i</Md.Button>\n                    <Md.Button decorator=\"fab\" disabled={true}>i</Md.Button>\n                    <Md.Button decorator=\"fab\" warn={true}>i</Md.Button>\n                </div>\n            </div>\n        );\n    }\n});\n\nmodule.exports = ButtonDemo;"},{"module":"Content","source":"/**\n * @jsx React.DOM\n */\n\nvar React = require('react'),\n    Md = require('react-md');\n    \nvar ContentDemo = React.createClass({\n\n    \n    render: function () {\n        return (\n            <Md.Content padding={true} style={{height:'500px'}}>\n                <p>Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent reformidans no. Sed laudem aliquam ne.</p>\n                <p>Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent.</p>\n                <p>Ad sea dolor accusata consequuntur. Sit facete convenire reprehendunt et. Usu cu nonumy dissentiet, mei choro omnes fuisset ad. Te qui docendi accusam efficiantur, doming noster prodesset eam ei. In vel posse movet, ut convenire referrentur eum, ceteros singulis intellegam eu sit.</p>\n                <p>Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his, solum virtute recteque et cum. Vel cu luptatum signiferumque, mel eu brute nostro senserit. Blandit euripidis consequat ex mei, atqui torquatos id cum, meliore luptatum ut usu. Cu zril perpetua gubergren pri. Accusamus rationibus instructior ei pro, eu nullam principes qui, reque justo omnes et quo.</p>\n                <p>Sint unum eam id. At sit fastidii theophrastus, mutat senserit repudiare et has. Atqui appareat repudiare ad nam, et ius alii incorrupte. Alii nullam libris his ei, meis aeterno at eum. Ne aeque tincidunt duo. In audire malorum mel, tamquam efficiantur has te.</p>\n                <p>Qui utamur tacimates quaestio ad, quod graece omnium ius ut. Pri ut vero debitis interpretaris, qui cu mentitum adipiscing disputationi. Voluptatum mediocritatem quo ut. Fabulas dolorem ei has, quem molestie persequeris et sit.</p>\n                <p>Est in vivendum comprehensam conclusionemque, alia cetero iriure no usu, te cibo deterruisset pro. Ludus epicurei quo id, ex cum iudicabit intellegebat. Ex modo deseruisse quo, mel noster menandri sententiae ea, duo et tritani malorum recteque. Nullam suscipit partiendo nec id, indoctum vulputate per ex. Et has enim habemus tibique. Cu latine electram cum, ridens propriae intellegat eu mea.</p>\n                <p>Duo at aliquid mnesarchum, nec ne impetus hendrerit. Ius id aeterno debitis atomorum, et sed feugait voluptua, brute tibique no vix. Eos modo esse ex, ei omittam imperdiet pro. Vel assum albucius incorrupte no. Vim viris prompta repudiare ne, vel ut viderer scripserit, dicant appetere argumentum mel ea. Eripuit feugait tincidunt pri ne, cu facilisi molestiae usu.</p>\n                <p>Qui utamur tacimates quaestio ad, quod graece omnium ius ut. Pri ut vero debitis interpretaris, qui cu mentitum adipiscing disputationi. Voluptatum mediocritatem quo ut. Fabulas dolorem ei has, quem molestie persequeris et sit.</p>\n                <p>Est in vivendum comprehensam conclusionemque, alia cetero iriure no usu, te cibo deterruisset pro. Ludus epicurei quo id, ex cum iudicabit intellegebat. Ex modo deseruisse quo, mel noster menandri sententiae ea, duo et tritani malorum recteque. Nullam suscipit partiendo nec id, indoctum vulputate per ex. Et has enim habemus tibique. Cu latine electram cum, ridens propriae intellegat eu mea.</p>\n                <p>Duo at aliquid mnesarchum, nec ne impetus hendrerit. Ius id aeterno debitis atomorum, et sed feugait voluptua, brute tibique no vix. Eos modo esse ex, ei omittam imperdiet pro. Vel assum albucius incorrupte no. Vim viris prompta repudiare ne, vel ut viderer scripserit, dicant appetere argumentum mel ea. Eripuit feugait tincidunt pri ne, cu facilisi molestiae usu.</p>\n            </Md.Content>\n        );\n    }\n});\n\nmodule.exports = ContentDemo;"},{"module":"Divider","source":"/**\n * @jsx React.DOM\n */\n\nvar React = require('react'),\n    Md = require('react-md');\n    \nvar DividerDemo = React.createClass({\n\n    \n    render: function () {\n        return (\n            <Md.Content>\n                <div className=\"demo-well\">You can put dividers wherever you want</div>\n                <Md.Divider />\n                <div className=\"demo-well\">They're like a kind of hr...</div>\n                <Md.Divider />\n                <div layout=\"row\" layoutAlign=\"right center\" className=\"demo-well\">\n                    <Md.Button primary={true}>Button example</Md.Button>\n                </div>\n            </Md.Content>\n        );\n    }\n});\n\nmodule.exports = DividerDemo;"},{"module":"Input","source":"/**\n * @jsx React.DOM\n */\n\nvar React = require('react'),\n    Md = require('react-md');\n    \nvar InputDemo = React.createClass({\n    \n    rmenu: function () {\n        this.refs.rmenu.open();\n    },\n    lmenu: function () {\n        this.refs.lmenu.open();\n    },\n    \n    render: function () {\n        return (\n            <div>\n                <Md.Content padding={true}>\n                    <Md.Input label=\"Name\" />\n                    <Md.Input label=\"Address\" defaultValue=\"Default value\" />\n                </Md.Content>\n            </div>\n        );\n    }\n});\n\nmodule.exports = InputDemo;"},{"module":"List","source":"/**\n * @jsx React.DOM\n */\n\nvar React = require('react'),\n    Md = require('react-md');\n    \nvar SidenavDemo = React.createClass({\n    menu: function () {\n        this.refs.menu.open();\n    },\n    \n    render: function () {\n        return (\n            <Md.List>\n                <Md.ListItem>\n                    <h3>Title</h3>\n                    <h4>Subtitle</h4>\n                    <p>\n                        Notes list\n                    </p>\n                </Md.ListItem>\n                <Md.ListItem>\n                    <h3>Title</h3>\n                    <h4>Subtitle</h4>\n                    <p>\n                        Notes list\n                    </p>\n                </Md.ListItem>\n                <Md.ListItem>\n                    <h3>Title</h3>\n                    <h4>Subtitle</h4>\n                    <p>\n                        Notes list\n                    </p>\n                </Md.ListItem>\n                <Md.ListItem>\n                    <h3>Title</h3>\n                    <h4>Subtitle</h4>\n                    <p>\n                        Notes list\n                    </p>\n                </Md.ListItem>\n                <Md.ListItem>\n                    <h3>Title</h3>\n                    <h4>Subtitle</h4>\n                    <p>\n                        Notes list\n                    </p>\n                </Md.ListItem>\n                <Md.ListItem>\n                    <h3>Title</h3>\n                    <h4>Subtitle</h4>\n                    <p>\n                        Notes list\n                    </p>\n                </Md.ListItem>\n                <Md.ListItem>\n                    <h3>Title</h3>\n                    <h4>Subtitle</h4>\n                    <p>\n                        Notes list\n                    </p>\n                </Md.ListItem>\n                <Md.ListItem>\n                    <h3>Title</h3>\n                    <h4>Subtitle</h4>\n                    <p>\n                        Notes list\n                    </p>\n                </Md.ListItem>\n            </Md.List>\n        );\n    }\n});\n\nmodule.exports = SidenavDemo;"},{"module":"Sidenav","source":"/**\n * @jsx React.DOM\n */\n\nvar React = require('react'),\n    Md = require('react-md');\n    \nvar SidenavDemo = React.createClass({\n    \n    rmenu: function () {\n        this.refs.rmenu.open();\n    },\n    lmenu: function () {\n        this.refs.lmenu.open();\n    },\n    \n    render: function () {\n        return (\n            <div>\n                <Md.Content padding={true}>\n                    <p>\n                        You can make Sidenavs appear\n                    </p>\n                    <Md.Button decorator=\"raised\" onClick={this.lmenu}>Left sidenav</Md.Button>\n                    <Md.Button decorator=\"raised\" onClick={this.rmenu}>Right sidenav</Md.Button>\n                </Md.Content>\n                <Md.Sidenav ref=\"lmenu\">\n                    <Md.Toolbar>\n                        <h1 className=\"md-toolbar-tools md-toolbar-tools-bottom\">Sidenav title</h1>\n                    </Md.Toolbar>\n                    <Md.Content padding={true}>\n                        <p>You can put here whatever you like</p>\n                    </Md.Content>\n                </Md.Sidenav>\n                <Md.Sidenav ref=\"rmenu\" side=\"right\">\n                    <Md.Content>\n                        <Md.List>\n                            <Md.ListItem>\n                                <h3>Title</h3>\n                                <h4>Subtitle</h4>\n                                <p>\n                                    Notes list\n                                </p>\n                            </Md.ListItem>\n                            <Md.ListItem>\n                                <h3>Title</h3>\n                                <h4>Subtitle</h4>\n                                <p>\n                                    Notes list\n                                </p>\n                            </Md.ListItem>\n                        </Md.List>\n                    </Md.Content>\n                </Md.Sidenav>\n            </div>\n        );\n    }\n});\n\nmodule.exports = SidenavDemo;"},{"module":"Toast","source":"/**\n * @jsx React.DOM\n */\n\nvar React = require('react'),\n    Md = require('react-md');\n    \nvar ChildElement = React.createClass({\n    mixins: [Md.ToastMixin],\n    \n    showSimpleToast: function () {\n        this.toast('Hello world !');   \n    },\n    \n    showActionToast: function () {\n        this.toast({\n            mdContent: 'Message',\n            mdAction: 'OK'\n        });   \n    },\n    \n    showCustomToast: function () {\n        this.toast({\n            mdContent: <p>Custom <strong>with bold</strong></p>,\n            mdAction: 'OK',\n            mdCapsule: true\n        });   \n    },\n    \n    render: function () {\n        return (\n            <div>\n                <Md.Button decorator=\"raised\" onClick={this.showSimpleToast}>Simple Toast</Md.Button>\n                <Md.Button decorator=\"raised\" onClick={this.showActionToast}>Action Toast</Md.Button>\n                <Md.Button decorator=\"raised\" onClick={this.showCustomToast}>Custom Toast</Md.Button>\n            </div>\n        );\n    }\n});\n\nvar ToastDemo = React.createClass({\n    mixins: [Md.ToastContainerMixin],\n    \n    render: function () {\n        return (\n            <div style={{minHeight:'500px'}}>\n                <ChildElement />\n                {this.state.toast}\n            </div>\n        );\n    }\n});\n\nmodule.exports = ToastDemo;"},{"module":"Whiteframe","source":"/**\n * @jsx React.DOM\n */\n\nvar React = require('react'),\n    Md = require('react-md');\n    \nvar WhiteframeDemo = React.createClass({\n    render: function () {\n        var demos = [];\n        \n        for (var i=1 ; i<=5 ; ++i) {\n            demos.push(\n                <Md.Whiteframe key={i} zDepth={i} style={{margin: '30px 50px', padding: '20px'}}>\n                    <p>zDepth={'{' + i + '}'}</p>\n                </Md.Whiteframe>\n            );\n        }\n        return (\n            <div>\n                {demos}\n            </div>\n        );\n    }\n});\n\nmodule.exports = WhiteframeDemo;"}]
},{}]},{},[]);

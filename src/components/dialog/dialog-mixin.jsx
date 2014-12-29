/**
 * @jsx React.DOM
 */

var React = require('react'),
    Anim = React.addons.CSSTransitionGroup,
    CSSCore = require('react/lib/CSSCore'),
    
    Button = require('../button/button.jsx'),
    Backdrop = require('../backdrop/backdrop.jsx');
    
var Dialog = React.createClass({
    
    propTypes: {
        mdOnRequestClose: React.PropTypes.func.isRequired,
        mdSource: React.PropTypes.node
    },
    
    outboundsClick: function (evt) {
        if (CSSCore.hasClass(evt.target, 'md-dialog-container')) {
            this.props.mdOnRequestClose();
        }
    },
    
    render: function () {
        var actions = [];
        actions.push(<Button key={0}>OK</Button>);
        return (
            <div className="md-dialog-container" onClick={this.outboundsClick}>
                {React.createElement('md-dialog', {className:'md-default-theme transition-in'},
                    React.createElement('md-content', {className:'md-default-theme'},
                        this.props.mdTitle ? <h2>{this.props.mdTitle}</h2> : false,
                        this.props.mdContent
                    ),
                    actions.length > 0 ? <div className="md-actions">{actions}</div> : false
                )}
            </div>
        );
    }
});

var DialogContainer = React.createClass({
    propTypes: {
        mdDialog: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.bool
        ])
    },
    
    getDefaultProps: function() {
        return {
            mdDialog: false
        };
    },
    
    render: function () {
        return (
            <div>
                <Anim transitionName="ng">
                    {this.props.mdDialog ? <Backdrop key="backdrop" className="md-dialog-backdrop md-opaque" /> : false}
                </Anim>
                {this.props.mdDialog}
            </div>
        )
    }
});

var rootDialogContainer = false;

var DialogMixin = {
    _container: false,
    
    contextTypes: {
        dialogContainer: React.PropTypes.instanceOf(DialogContainer)
    },
  
    componentDidMount: function () {
        if (this.context.dialogContainer) this._container = this.context.dialogContainer;
        else {
            if (!rootDialogContainer) {
                var element = <DialogContainer/>;
                var node = document.createElement('div');
                document.body.appendChild(node);
                rootDialogContainer = React.render(element, node);
            }
            this._container = rootDialogContainer;
        }
    },
    
    closeDialog: function () {
        this._container.setProps({
            mdDialog: false
        });
    },
    
    dialog: function (props, event) {
        var dialog = <Dialog {...props} mdOnRequestClose={this.closeDialog} mdSource={event.target} />;
        this._container.setProps({
            mdDialog: dialog
        });
    }
};

module.exports = DialogMixin;
/**
 * This code is deeply inspired from the ReactCSSTransitionGroupChild from 
 * https://github.com/facebook/react
 * 
 */


"use strict";

var React = require('react');

var CSSCore = require('react/lib/CSSCore');
var ReactTransitionEvents = require('react/lib/ReactTransitionEvents');

var TICK = 17;

var ClassTransitions = {
    transition: function(node, baseClassName, animationType, finishCallback) {
        var className = baseClassName + '-' + animationType;
        var activeClassName = className + '-active';

        var endListener = function(e) {
            if (e && e.target !== node) {
                return;
            }

            CSSCore.removeClass(node, className);
            CSSCore.removeClass(node, activeClassName);

            ReactTransitionEvents.removeEndEventListener(node, endListener);

            // Usually this optional callback is used for informing an owner of
            // a leave animation and telling it to remove the child.
            finishCallback && finishCallback();
        };

        ReactTransitionEvents.addEndEventListener(node, endListener);

        CSSCore.addClass(node, className);
        // Need to do this to actually trigger a transition.
        this.queueClass({
            base: baseClassName,
            type: animationType,
            active: activeClassName,
            node: node
        });
    },

    queueClass: function(infos) {
        this.classNameQueue.push(infos);

        if (!this.timeout) {
            this.timeout = setTimeout(this.flushClassNameQueue, TICK);
        }
    },

    flushClassNameQueue: function() {
        if (this.isMounted()) {
            this.classNameQueue.forEach(function (classInfo) {
                var action = classInfo.type + 'Class';
                
                CSSCore[action](classInfo.node, classInfo.base);
                CSSCore.addClass(classInfo.node, classInfo.active);
            });
        }
        this.classNameQueue.length = 0;
        this.timeout = null;
    },

    componentWillMount: function() {
        this.classNameQueue = [];
    },

    componentWillUnmount: function() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    },

    addClassTransition: function (node, className) {
        this.transition(node, className, 'add');
    },

    removeClassTransition: function (node, className) {
        this.transition(node, className, 'remove');
    },
};

module.exports = ClassTransitions;
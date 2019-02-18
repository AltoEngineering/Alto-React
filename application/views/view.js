import React from 'react';
import ReactDOM from 'react-dom';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

class View {

    static toString() {
        return 'Alto.View'
    }

    static create(mixin) {
        delete this.create;
        const html = this.viewWillLoad(Object.assign(this, mixin));

        this.viewDidLoad(html);
    }

    static extend(mixin) {
        const view = new View();
        view.create = this.create;
        return Object.assign(view, mixin);
    }

    props(mixin) {
        const hash = {};

        hash.className = mixin.classNames.join(',').replace(',', ' ');
        hash.key = Math.random();
        hash.id = hash.key;
        //todo: refactor to an internal hash mapping {[alto-guid]: [mixin.action]} //
        hash['data-alto-action'] = mixin.action;
        return hash;
    }

    viewWillLoad(mixin) {
        const {childViews} = mixin;
        let html, children = [];

        if (childViews) {
            if (mixin.title) {children.push(mixin.title)};
            childViews.map((child) => {
                children.push(mixin.viewWillLoad(mixin[child]));
               return children;
            });
            html = React.createElement(mixin.tag, mixin.props(mixin), children);
        } else {
            let title;
            if (mixin.title) {title = mixin.title};
            html = React.createElement(mixin.tag, mixin.props(mixin), title);
        }

        return html;
    }

    viewDidLoad(html) {
       this.viewWillAppear(html);
    }

    viewWillAppear(html) {
        ReactDOM.render(html, document.getElementById('root'));
        this.viewDidAppear();
    }

    viewDidAppear() {

    }

    viewAnimateIn() {

    }

    remove() {

    }

    viewWillDisappear() {

    }

    viewAnimateOut() {

    }

    viewDidDisappear() {

    }

};

export default View;
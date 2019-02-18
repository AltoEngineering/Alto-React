// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let Router = class Router {

    static toString() {
        return 'Alto.Router'
    }

    static create(mixin) {
        delete this.create;
        return Object.assign(this, mixin);
    }

    static extend(mixin) {
        const router = new Router();
        router.create = this.create;
        return Object.assign(router, mixin);
    }

    constructor() {
        this.connectRouteEventListeners();
    }

    connectRouteEventListeners () {
        window.addEventListener("popstate", this.routeDidChange, false);
    }

    routeDidChange() {
        alert('route did change');
    }

    goToRoute(route) {
        window.history.pushState({page: route}, route, route);
        this.routeDidChange();
    }

};

export default Router;
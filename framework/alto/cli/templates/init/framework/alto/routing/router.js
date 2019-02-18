import CoreObject from "../foundation/core_object";
import {default as router} from '../../../application/router/core';
import React from 'react';
import ReactDOM from 'react-dom';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2018 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let Router = CoreObject.extend({

    route: function () {
        var path = window.location.pathname;

        if (path.charAt(0) === '#') {
            path = path.slice(1, path.length)
        }

        if (path.charAt(0) === '/') {
            path = path.slice(1, path.length)
        }

        if (path.indexOf('?') > -1) {
            path = path.substr(0, path.indexOf('?'));
        }

        if (path.charAt(path.length - 1) === '/') {
            path = path.slice(0, path.length -1)
        }

        return path;
    },

    init: function () {
        this.connectRouteEventListeners();
    },

    connectRouteEventListeners: function () {
        window.addEventListener("popstate", this.routerDidBecomeActive, true);
    },

    routerDidBecomeActive: function () {
        router.checkIncomingRoutePairsWithRouteObject();
    },

    checkIncomingRoutePairsWithRouteObject: function (_path) {
        let path = _path ? _path : this.route().split('/'),
            routeObject,
            count = 0;

        if (this.route() === "") {
            path = ["index"];
        }

        while (count < path.length) {
            // (if) the first iteration: no route object... so lets assign one
            // (else if) continue walking the route object path
            // (else if) route not found... but we did find a potential path... lets assume it is a unique_id being passed in
            if (count === 0) {
                routeObject = this.routes[path[count]];
            } else if (routeObject[path[count]]) {
                routeObject = routeObject[path[count]];
            } else if (!this[path[count]] && !routeObject[path[count]]) {
                routeObject = routeObject['uniqueId'];
            }

            count++;
        }

        if (routeObject) {
            this.checkForSecureRoute(routeObject);
        } else {
            this.malformRouteProvided();
        }

    },

    checkForSecureRoute: function (routeObject) {
        if (routeObject.isSecure) {
            //todo:  Handle secure route logic
        } else {
            this.checkRouteForInverse(routeObject);
        }

    },

    checkRouteForInverse: function (routeObject) {
        if (routeObject.isInverse) {
            this.walkRouteInverse(routeObject);
        } else {
            this.checkForComponent(routeObject)
        }
    },

    walkRouteInverse: function (routeObject) {
        let routeObjects = [],
            routeObjectsForInverseRoute = [],
            self = this,
            updatedRouteObject;

        let path = this.route().split('/');

        path.forEach(function (route) {
            if (!updatedRouteObject) {
                updatedRouteObject = self.routes[route];
            } else {
                if (updatedRouteObject[route]) {
                    updatedRouteObject = updatedRouteObject[route]
                } else if (updatedRouteObject.uniqueId) {
                    updatedRouteObject = updatedRouteObject.uniqueId
                } else {
                    throw new Error('something odd was given to the route inverse');
                }
            }

            routeObjects.push(updatedRouteObject);

        })


        // great we collected ALL of the routes down to our last nested route but we might not need them all
        // lets iterate through them and start with the inner most inverse and walk up to the master.
        routeObjects.reverse().some(function (rt) {
            routeObjectsForInverseRoute.splice(0, 0, rt);

            if (rt.isMaster) {
                return true
            }

            return false;
        });

        this.verifyRouteInverseExists(routeObjectsForInverseRoute);
    },

    verifyRouteInverseExists: function (routeObjects) {
        if (routeObjects.length > 0) {
            this.checkForComponent(routeObjects[0], routeObjects);
        } else {
            // Boom! No more states needed for the incoming inversed route
        }
    },

    checkForComponent: function (routeObject, routeObjects) {
        if (routeObject.component && routeObject.action) {
            this.displayComponent(routeObject);
            this.invokeRouteAction(routeObject);
        } else if (routeObject.component) {
            this.displayComponent(routeObject);
        } else if (routeObject.action) {
            this.invokeRouteAction(routeObject);
        } else {
            this.malformComponentProvided()
        }

        this.flushCurrentRouteObjectFromRouteObjects(routeObjects)
    },

    flushCurrentRouteObjectFromRouteObjects: function (routeObjects = []) {
        this.verifyRouteInverseExists(routeObjects.slice(1));
    },

    displayComponent: function (routeObject) {
        ReactDOM.render(<routeObject.component/>, document.getElementById('root'));
    },

    invokeRouteAction: function (routeObject) {
        routeObject.action();
    },

    malformRouteProvided: function () {
        let location = window.location.pathname;
        throw new Error(`Route ${location} not found`);
    },

    malformComponentProvided: function () {
        let location = window.location.pathname;
        throw new Error(`Route ${location} does not have a component.  Please provide a component or componentEvent.`);
    },

    goToRoute: function (route) {
        if (`/${route}` === window.location.pathname) {
            return
        }
        window.history.pushState({}, route, route);
        this.routerDidBecomeActive();
    }

});

export default Router;
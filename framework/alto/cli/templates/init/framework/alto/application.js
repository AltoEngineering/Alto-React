import CoreObject from "./foundation/core_object";
import Console from "./foundation/console";
import {default as router} from "../../application/router/core";
import Cookie from "./data/cookie";

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2018 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let Application = CoreObject.extend({

    version: null,

    milestone: null,

    router,

    toString: function () {return 'Alto.Application'},

    init: function () {
        this.applicationWillLoad();
    },

    applicationWillLoad: function () {
        Console.message('applicationWillLoad');
        this.verifyAuthentication();
    },

    verifyAuthentication: function () {
        this.verifyRouterIsPresent();
    },

    verifyRouterIsPresent: function () {
        this.get('router') ? this.wakeRouter(this.get('router')) : this.malformedRouterProvided();
    },

    malformedRouterProvided: function () {
        Console.error('Malformed router provided.')
    },

    wakeRouter: function (router) {
        this.fetchLocStrings();
        router.routerDidBecomeActive();
    },

    fetchLocStrings: function () {
        this.fetchLocStringsSuccess()
    },

    applicationDidLoad: function () {
        Console.message('applicationDidLoad');
    },

    fetchLocStringsSuccess: function () {
        this.applicationDidLoad();
    },

    endSession: function () {
        var expirationDate = new Date(),
            cookie;

        expirationDate.setDate(expirationDate.getDate() - 30000);

        cookie = Cookie.create({
            name: this.get('cookieName'),
            value: '',
            domain: this.get('cookieDomain'),
            path: '/',
            expires: expirationDate,
            secure: false
        });
        cookie.write();

        window.location.reload();
    }


});

export default Application;
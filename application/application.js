// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let Application = class Application {

    static toString() {
        return 'Alto.Application'
    }

    static create(mixin) {
        const application = Object.assign(new Application(), this, mixin);
        application.init();
        return application;
    }

    static extend(mixin) {
        const instance = new Application();
        instance.create = this.create;
        return Object.assign(instance, mixin);
    }

    init() {}

};

Application = Application.extend({

    version: null,

    milestone: null,

    router: null,

    statechart: null,

    init: function () {
        this.applicationWillLoad();
    },

    applicationWillLoad: function () {
        console.log('applicationWillLoad');
    },

    applicationDidLoad: function ()  {
        console.log('applicationDidLoad');
    }

});

export default Application;
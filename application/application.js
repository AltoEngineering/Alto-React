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
        const application = Object.assign(new Application(), mixin);
        application.applicationWillLoad();
        return application;
    }

    applicationWillLoad () {
        console.log('applicationWillLoad');
    }

    applicationDidLoad() {
        console.log('applicationDidLoad');
    }

};

export default Application;
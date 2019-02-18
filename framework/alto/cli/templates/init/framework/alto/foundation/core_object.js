import generateGuid from "./guid";

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2018 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

class CoreObject {

    static toString() {
        return `Alto.CoreObject`
    }

    static create(...args) {
        const instance = Object.assign(new CoreObject(), this, ...args);
        delete instance.create;
        delete instance.extend;
        instance.guid = generateGuid();

        instance.init();

        return instance;
    }

    static extend(...args) {
        const instance = new CoreObject();
        instance.create = this.create;
        instance.extend = this.extend;
        return Object.assign(instance, this, ...args);
    }

    init() {
    }

};

CoreObject = CoreObject.extend({

    set: function (key, value) {
        if (this.get(key) === value) {
            return this;
        }

        // update self //
        if (this[`${key}WillChange`]) {
            this[`${key}WillChange`]()
        }

        this[key] = value;

        if (this[`${key}DidChange`]) {
            this[`${key}DidChange`]()
        }

        return this;

    },

    get: function(key) {
        return this[key];
    }

});

export default CoreObject;
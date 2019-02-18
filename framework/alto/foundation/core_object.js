// ==========================================================================
// Project: Alto - JavaScript Foundation Framework
// Copyright: @2018 The Code Boutique, Corp
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let CoreObject = class CoreObject {

    static toString() {
        return `Alto.CoreObject`
    }

    static create(...args) {
        const instance = Object.assign(new CoreObject(), this, ...args);
        delete instance.create;
        instance.init();
        return instance;
    }

    static extend(...args) {
        const instance = new CoreObject();
        instance.create = this.create;
        instance.extend = this.extend;
        return Object.assign(instance, this, ...args);
    }

    set(key, value) {
        this[key] = value;
        return this;
    }

    get(key) {
        return this[key];
    }

    init() {}

};

export default CoreObject;

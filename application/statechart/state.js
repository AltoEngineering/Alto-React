// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let State = class State {

    static toString() {
        return 'Alto.State'
    }

    static create(mixin) {
        delete this.create;
        this.enterState();
        return Object.assign(this, mixin);
    }

    static extend(mixin) {
        const instance = new State();
        instance.create = this.create;
        return Object.assign(instance, mixin);
    }

    enterState() {
        console.log('did enter state');
    }

    exitState() {
        console.log('did exit state');
    }

};

export default State;
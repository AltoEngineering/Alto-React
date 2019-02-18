// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let Statechart = class Statechart {

    static toString() {
        return 'Alto.Statechart'
    }

    static create(mixin) {
        const instance = new Statechart();
        instance.init();
        return Object.assign(instance, mixin);
    }

    init() {}

};

Statechart = Statechart.create({

    currentState: null,

    currentSubState: null,

    goToState: () => {

    },

    goToSubState: () => {

    },

    set: () => {

    },

    get: () => {

    }

});

export default Statechart;
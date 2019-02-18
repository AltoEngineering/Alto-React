import Application from './application/application.js';
import Router from './application/routing/router.js';
import View from './application/views/view.js';
import Statechart from './application/statechart/statechart.js';
import State from './application/statechart/state.js';
// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

class Alto {

    constructor() {
        this.Application = Application;
        this.Router = Router;
        this.View = View;
        this.Statechart = Statechart;
        this.State = State;
    }

};

window.Alto = new Alto();

export default window.Alto;
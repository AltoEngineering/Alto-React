import Application from './application/application.js';
import Router from './routing/router.js';

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
    }

};

window.Alto = new Alto();

export default window.Alto;
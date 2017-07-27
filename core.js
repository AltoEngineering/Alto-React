import Application from './application/application.js';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

class Alto {

    constructor() {
        this.Application = Application;
    }

};

window.Alto = new Alto();

export default window.Alto;
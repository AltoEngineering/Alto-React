"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core_object = require("../foundation/core_object");

var _core_object2 = _interopRequireDefault(_core_object);

var _init = require("./generators/init");

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==========================================================================
// Project: Alto Cli - JavaScript Cli Framework
// Copyright: @2018 The Code Boutique, Corp
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

var clc = require('cli-color');

var commands = _core_object2.default.create({

    version: '0.0.6',

    options: [{
        command: "init <application_name>",
        description: "Creates file structure for Alto-React Application",
        example: "alto init todos"
    }, {
        command: "help",
        description: "Display commands",
        example: "alto help"
    }, {
        command: "-v",
        description: "Display alto version",
        example: "alto -v"
    }],

    displayOptions: function displayOptions() {
        var options = commands.options,
            formattedOptions = ['Alto-Cli Commands:'];

        options.forEach(function (option) {
            formattedOptions.push(clc.xterm(255)(option.command), clc.xterm(153)(option.description), clc.xterm(230)(option.example), option.notes ? clc.xterm(219)(option.notes) : '');
        });

        formattedOptions = formattedOptions.join('\n').replace(/^/gm, '    ');

        console.log(formattedOptions);
    },

    processEvent: function processEvent(args) {
        if (!args) {
            commands.displayOptions();return ' ';
        }

        var command = args[0];

        switch (command) {
            case 'init':
                _init2.default.action(args.slice(1, args.length));
                return ' ';
            case 'help':
                return commands.displayOptions();
            case '-v':
                return commands.get('version');
            default:
                commands.displayOptions();
                return ' ';
        }
    }

});

exports.default = commands;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core_object = require("../../foundation/core_object");

var _core_object2 = _interopRequireDefault(_core_object);

var _commands = require("../commands");

var _commands2 = _interopRequireDefault(_commands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==========================================================================
// Project: Alto Cli - JavaScript Cli Framework
// Copyright: @2018 The Code Boutique, Corp
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

var fs = require('fs');
var clc = require("cli-color");
var wrench = require('wrench');
var path = require('path');
var child_process = require('child_process');

var init = _core_object2.default.create({

    action: function action(args) {
        if (!args[0]) {
            console.log(clc.red('alto init requires a name.'));
            _commands2.default.processEvent('help');
            return;
        }

        if (!fs.existsSync(process.cwd() + "/" + args[0])) {
            console.log(clc.greenBright("Generating project " + args[0] + "."));
            init.generateReactApplication(args[0]);
        } else {
            console.log(clc.red("A project named " + args[0] + " exists already.  Cancelling project creation."));
        }
    },

    generateReactApplication: function generateReactApplication(target) {
        child_process.execSync("npx create-react-app " + target, { stdio: [0, 1, 2] });
        init.clearDirectory(target);
    },

    clearDirectory: function clearDirectory(target) {
        var fullpath = target + "/src";

        wrench.rmdirSyncRecursive(fullpath, null);
        init.cloneTemplate(target);
    },

    cloneTemplate: function cloneTemplate(target) {
        var basePath = __dirname.substring(0, __dirname.length - 35),
            template = 'framework/alto/cli/templates/init',
            fullpath = "" + basePath + template;

        wrench.copyDirRecursive(fullpath, target + "/src", false, function (error) {

            if (error) {
                console.log(error);
            } else {
                init.modifyClonedProjectFileContent(target);
            }
        });
    },

    modifyClonedProjectFileContent: function modifyClonedProjectFileContent(target) {
        var allContent = wrench.readdirSyncRecursive(target + "/src/application");

        allContent.forEach(function (file) {

            var filePath = path.join(process.cwd() + "/" + target + "/src/application", file);

            if (fs.lstatSync(filePath).isFile()) {
                fs.writeFileSync(filePath, fs.readFileSync(filePath, 'utf8').replace(/replace_application_name/gi, target));
            }
        });

        fs.writeFileSync(process.cwd() + "/" + target + "/src/index.js", fs.readFileSync(target + "/src/index.js", 'utf8').replace(/replace_application_name/gi, target));
        console.log(clc.greenBright("Your project is ready. Enjoy"));
    }

});

exports.default = init;
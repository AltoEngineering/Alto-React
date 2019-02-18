// ==========================================================================
// Project: Alto Cli - JavaScript Cli Framework
// Copyright: @2018 The Code Boutique, Corp
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

import CoreObject from "../../foundation/core_object";
import commands from "../commands";

let fs = require('fs');
let clc = require("cli-color");
let wrench = require('wrench');
let path = require('path');
let child_process = require('child_process');


let init = CoreObject.create({

    action: (args) => {
        if (!args[0]) {
            console.log(clc.red('alto init requires a name.'));
            commands.processEvent('help');
            return;
        }

        if (!fs.existsSync(`${process.cwd()}/${args[0]}`)) {
            console.log(clc.greenBright(`Generating project ${args[0]}.`));
            init.generateReactApplication(args[0]);
        } else {
            console.log(clc.red(`A project named ${args[0]} exists already.  Cancelling project creation.`));
        }
    },

    generateReactApplication: (target) => {
        child_process.execSync(`npx create-react-app ${target}`,{stdio:[0,1,2]});
        init.clearDirectory(target);
    },

    clearDirectory: (target) => {
        let fullpath = `${target}/src`;

        wrench.rmdirSyncRecursive(fullpath, null);
        init.cloneTemplate(target);
    },

    cloneTemplate: (target) => {
        let basePath = __dirname.substring(0, __dirname.length - 35),
            template = 'framework/alto/cli/templates/init',
            fullpath = `${basePath}${template}`;

        wrench.copyDirRecursive(fullpath, `${target}/src`, false, (error) => {

            if (error) {
                console.log(error);
            } else {
                init.modifyClonedProjectFileContent(target);
            }

        });
    },

    modifyClonedProjectFileContent: (target) => {
        let allContent = wrench.readdirSyncRecursive(`${target}/src/application`);

        allContent.forEach(function (file) {

            let filePath = path.join(`${process.cwd()}/${target}/src/application`, file);

            if (fs.lstatSync(filePath).isFile()) {
                fs.writeFileSync(filePath, fs.readFileSync(filePath, 'utf8').replace(/replace_application_name/gi, target));
            }
        });

        fs.writeFileSync(`${process.cwd()}/${target}/src/index.js`, fs.readFileSync((`${target}/src/index.js`), 'utf8').replace(/replace_application_name/gi, target));
        console.log(clc.greenBright(`Your project is ready. Enjoy`));
    }

});

export default init;
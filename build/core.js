#!/usr/bin/env node
"use strict";

var _commands = require("./framework/alto/cli/commands");

var _commands2 = _interopRequireDefault(_commands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_commands2.default.processEvent(process.argv.slice(2)));
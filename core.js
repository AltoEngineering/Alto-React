#!/usr/bin/env node

import commands from "./framework/alto/cli/commands";

console.log(commands.processEvent(process.argv.slice(2)));
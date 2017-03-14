#!/usr/bin/env node

var nopt = require('nopt'),
    update = require('update-notifier'),
    pkg = require('../package.json'),
    projects = require('../lib'),
    utility = require('../lib/utility');

// Options that can be passed to commands
var options = {
  'name': String,
  'directory': String,
  'installer': String,
  'groupd': String
};

// Shorthands for the above commands
var shorthands = {
  'v': '--version',
  'p': '--name',
  'd': '--directory',
  'i': '--installer'
};

var parsed = nopt(options, shorthands);

// cmd.args contains basic commands like "new" and "help"
// cmd.opts contains options, like --libsass and --version
var cmd = {
  args: parsed.argv.remain,
  opts: parsed
};

utility.options = parsed;

// Check for updates once a day
// var notifier = update({
//   packageName: pkg.name,
//   packageVersion: pkg.version
// });
// notifier.notify();

// No other arguments given
if (typeof cmd.args[0] === 'undefined') {
  // If -v or --version was passed, show the version of the CLI
  if (typeof cmd.opts.version !== 'undefined') {
    process.stdout.write("projects CLI version " + pkg.version + '\n');
  }
  // Otherwise, just show the help screen
  else {
    projects.help();
  }
}

// Arguments given
else {
  // If the command typed in doesn't exist, show the help screen
  if (typeof projects[cmd.args[0]] == 'undefined') {
    projects.help();
  }
  // Otherwise, just run it already!
  else {
    // Every command function is passed secondary commands, and options
    // So if the user types "projects new myApp --edge", "myApp" is a secondary command, and "--edge" is an option
    projects[cmd.args[0]](cmd.args.slice(1), cmd.opts);
  }
}

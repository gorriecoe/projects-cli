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
  'group': String
};

// Shorthands for the above commands
var shorthands = {
  'v': '--version',
  'n': '--name',
  'd': '--directory',
  'i': '--installer',
  'g': '--group'
};

var parsed = nopt(options, shorthands);

// utility.args contains basic commands like "new" and "help"
utility.args =  parsed.argv.remain;
// utility.options contains options, like --name and --version
utility.options = parsed;

// Check for updates once a day
// var notifier = update({
//   packageName: pkg.name,
//   packageVersion: pkg.version
// });
// notifier.notify();

// No other arguments given
if (typeof utility.args[0] === 'undefined') {
  // If -v or --version was passed, show the version of the CLI
  if (typeof utility.options.version !== 'undefined') {
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
  if (typeof projects[utility.args[0]] == 'undefined') {
    projects.help();
  }
  // Otherwise, just run it already!
  else {
    // Every command function is passed secondary commands, and options
    // So if the user types "projects new --name test", "--name" is an option to define the project name
    projects[utility.args[0]](utility.args.slice(1));
  }
}

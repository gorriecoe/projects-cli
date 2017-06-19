var format = require('string-template'),
    exec = require('child_process').exec,
    utility = require('../utility'),
    options = utility.options;

module.exports = function(callback) {
  var command = [
    'mkdir -p {directory}',
    'cd {directory}',
    options.installer.Command
  ].join(" && ");

  command = format(
    command,
    {
      name: options.name,
      directory: options.directory.application
    }
  );

  exec(command, function(err) {
    if (err instanceof Error) {
      console.log(utility.messages('commandFailed'));
      process.exit(1);
    }
    callback();
  });
};

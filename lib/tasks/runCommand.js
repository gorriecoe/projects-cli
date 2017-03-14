var format = require('string-template'),
    exec = require('child_process').exec,
    utility = require('../utility'),
    answers = utility.answers;

module.exports = function(callback) {
  var installer = answers.installer;
  var command = [
    'mkdir -p {directory}',
    'cd {directory}',
    utility.answers.installer.Command
  ].join(" && ");

  command = format(
    command,
    {
      name: answers.name,
      directory: answers.directory.application
    }
  );
  console.log(command);

  // // [TODO] Change to spawn and check for errors on stderr
  exec(command, function(err) {
    if (err instanceof Error) {
      console.log(utility.messages('commandFailed'));
      process.exit(1);
    }
    callback();
  });
};

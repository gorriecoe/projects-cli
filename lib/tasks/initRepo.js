var format = require('string-template'),
    exec = require('child_process').exec,
    utility = require('../utility'),
    options = utility.options;

module.exports = function(callback) {
  var remoteRepo = "https://github.com/{group}/{project}.git";

  remoteRepo = format(remoteRepo, {
    group: options.group,
    project: options.name
  });

  var command = [
    'mkdir -p {directory}',
    'rm -rf {directory}/.git',
    'cd {directory}',
    'git init',
    'git remote add origin {remoteRepo}',
    'git add --all',
    'git commit -m "Initial commit"',
    'git push -u origin --all'
  ].join(" && ");

  command = format(
    command,
    {
      directory: options.directory.application,
      remoteRepo: remoteRepo
    }
  );
  // console.log(command);
  exec(command, function(err) {
    if (err instanceof Error) {
      console.log(utility.messages('commandFailed'));
      process.exit(1);
    }
    callback();
  });
};

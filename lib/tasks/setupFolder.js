var format = require('string-template'),
    exec = require('child_process').exec,
    utility = require('../utility'),
    options = utility.options;

module.exports = function(callback) {
  var command = format(
    'mkdir -p {application}',
    {
      application: options.directory
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

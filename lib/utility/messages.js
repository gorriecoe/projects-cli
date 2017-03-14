var format = require('string-template'),
    colors = require('colors');

module.exports = function(message) {
  switch (message) {
    case 'noRoot':
        message = [
          'Running this installer as an administrator can cause problems.'.red,
          'Try running this command again without "sudo" or administrator rights.'.red
        ];
      break;
    case 'gitNotInstalled':
        message = [
          'You need Git installed to get started. Download it here: '.red,
          'http://git-scm.com/downloads'.yellow
        ];
      break;
    case 'commandFailed':
        message = [
          'The command failed.'.red,
          'Please check your command for any errors, typos or spelling mistakes.'.red,
        ];
      break;
    case 'installFail':
        message = [
          'There were some problems during the installation.'.red,
        ];
      break;
    case 'installSuccess':
        message = [
          'You\'re all set!'.cyan,
        ];
      break;
    case 'remoteRepoCreated':
        message = [
          'Remote repo successfully created.'.cyan,
        ];
      break;
    default:
      break;
  }
  return format(
    "--------------------\n{message}\n--------------------",
    {
      message: message.join("\n")
    }
  );
};

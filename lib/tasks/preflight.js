var isRoot = require('is-root'),
    utility = require('../utility'),
    which = require('which'),
    messages = utility.messages;

module.exports = function(callback) {
  if (isRoot()) {
    console.log(messages('noRoot'));
    process.exit(1);
  }

  which('git', function(er) {
    if (er) {
      console.log(messages('gitNotInstalled'));
      process.exit(69);
    }
    callback();
  });
};

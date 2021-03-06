var inquirer = require('inquirer'),
    fs = require('fs'),
    path = require('path'),
    utility = require('../utility'),
    config = utility.config,
    options = utility.options;

var question = {
  type: 'input',
  name: 'name',
  message: 'What\'s the project called? (no spaces)',
  validate: function(input) {
    var folder = path.join(config.Directory, input);
    console.log(fs.existsSync(folder));
    if (fs.existsSync(folder)) {
      return 'There\'s already a folder with that name in this directory.';
    }
    if (input.indexOf(" ") != -1) {
      return "The project name should not contain any spaces.";
    }
    return true;
  }
};

module.exports = function(callback) {
  if (options.name) {
    options.directory = config.Directory + options.name;
    callback();
  } else {
    inquirer.prompt(question, function(answers) {
      options.name = answers.name;
      options.directory = config.Directory + answers.name;
      callback();
    });
  }
};

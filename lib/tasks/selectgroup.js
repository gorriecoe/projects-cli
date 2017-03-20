var inquirer = require('inquirer'),
    utility = require('../utility'),
    config = utility.config,
    options = utility.options,
    groupChoices = [];

for(var group in config.Groups){
  groupChoices.push({
    name: group,
    value: group
  });
}

var question = {
  type: 'list',
  name: 'group',
  message: 'Select a group to save your repo too?',
  choices: groupChoices
};

module.exports = function(callback) {
  if (options.group) {
    callback();
  } else {
    inquirer.prompt(question, function(answers) {
      options.group = answers.group;
      callback();
    });
  }
};

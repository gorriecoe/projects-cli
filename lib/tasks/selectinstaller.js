var inquirer = require('inquirer'),
    utility = require('../utility'),
    config = utility.config,
    options = utility.options,
    objectPath = require("object-path"),
    installerChoices = [];

for(var installer in config.Installers){
  installerChoices.push({
    name: config.Installers[installer].Label,
    value: installer
  });
}

var question = {
  type: 'list',
  name: 'installer',
  message: 'Select a installer?',
  choices: installerChoices
};

module.exports = function(callback) {
  if (options.installer) {
    utility.answers.installer = objectPath.get(utility.config.Installers, options.installer);
    callback();
  } else {
    inquirer.prompt(question, function(answers) {
      utility.answers.installer = objectPath.get(utility.config.Installers, answers.installer);
      callback();
    });
  }
};

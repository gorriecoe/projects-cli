var os = require('os'),
    findConfig = require('find-config'),
    yaml = require('js-yaml'),
    config = yaml.safeLoad(findConfig.read('.projectsconfig.yml')),
    utility = {
      config: config,
      messages: {},
      questions: {},
      answers: {
        name: null,
        installer: null,
        directory: null,
        group: null
      }
    };

utility.config = config;

utility.config.Directory = (typeof config.Directory !== 'undefined' ? config.Directory : '~/');

utility.config.Directory = utility.config.Directory.replace('~', os.homedir);

utility.providers = {
  github: {
    createRepo: "https://api.github.com/orgs/{groupName}/repos",
    headerAccept: "application/vnd.github.v3+json",
    origin: "https://github.com/${group}/${project}.git"
  }
};

utility.messages = require('./messages');

module.exports = utility;

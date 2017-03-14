var utility = require('../utility'),
    got = require('got')
    objectPath = require("object-path");

module.exports = function(callback) {
  var groupName = utility.answers.group;
  var group = objectPath.get(utility.config.Groups, utility.answers.group);
  var token = utility.config.GithubToken;
  switch (group.Provider) {
    case 'github':
      got.post(`https://api.github.com/orgs/${groupName}/repos`, {
        json: true,
        headers: {
          'accept': 'application/vnd.github.v3+json',
          'authorization': `token ${token}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          'name': utility.answers.name,
          'private': true
        })
      }).then(response => {
        if (response.complete) {
          console.log(utility.messages('remoteRepoCreated'));
          callback();
        } else {
          process.exit(1);
        }
      });
      break;
    case 'bitbucket':

      break;
    default:
  }
};

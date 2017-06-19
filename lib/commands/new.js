var async = require('async'),
    rimraf = require('rimraf'),
    utility = require('../utility'),
    EventEmitter = require("events").EventEmitter;
var fs = require('fs'),
    os = require('os');
var got = require('got'),
    token = utility.config.GithubToken;

module.exports = function(args, callback, ee) {
  var project,
  installer,
  messages,
  directory,
  tasks = [
    getRepos,
    require('../tasks/preflight'),
    require('../tasks/projectname'),
    require('../tasks/selectinstaller'),
    require('../tasks/selectgroup'),
    require('../tasks/initRemoteRepo'),
    require('../tasks/setupFolder'),
    require('../tasks/runCommand'),
    require('../tasks/initRepo')
  ];

  // console.log(fs.fstatSync(myfolder));
  // Each function below is executed in order
  async.series(tasks, finish);

  function getRepos(callback) {
    // got.get(`https://api.github.com/user/repos`, {
    //   json: true,
    //   headers: {
    //     'accept': 'application/vnd.github.v3+json',
    //     'authorization': `token ${token}`,
    //     'content-type': 'application/json'
    //   }
    // }).then(response => {
    //   console.log(response.body.length);
    //   callback();
    // });
    callback();
  }

  // 4. Remove the Git folder and change the version number if applicable
  function folderSetup(callback) {
    fs.mkdir();
    callback();
  }

  // 7. Finish the process with a status report
  function finish(err, results) {
    // Indexes 4 and 5 of results are the npm/Bower statuses
    // All the rest should be undefined
    var allGood = results.indexOf(false) === -1;

    if (allGood) {
      console.log(utility.messages('installSuccess'));
    } else {
      console.log(utility.messages('installFail'));
    }

    if (typeof(callback)!=='undefined') callback();
  }
};

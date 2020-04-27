'use strict';


/**
 * get team
 * Get a team by their uuid 
 *
 * teamId UUID uuid of a team
 * returns Team
 **/
exports.getTeam = function(teamId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "organization" : "organization",
  "name" : "Team Chux",
  "description" : "description",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "email" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all teams
 * Get all teams 
 *
 * returns List
 **/
exports.listTeams = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "organization" : "organization",
  "name" : "Team Chux",
  "description" : "description",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "email" : ""
}, {
  "organization" : "organization",
  "name" : "Team Chux",
  "description" : "description",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "email" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


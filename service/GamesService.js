'use strict';


/**
 * get game
 * Get a game by its uuid 
 *
 * gameId UUID uuid of a game
 * returns Game
 **/
exports.getGame = function(gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "state" : {
    "graph" : {
      "nodes" : [ {
        "owner" : "Team Chux",
        "size" : 6,
        "edges" : [ {
          "id" : 2
        }, {
          "id" : 2
        } ],
        "maxSize" : 1,
        "location" : {
          "x" : 5,
          "y" : 5
        },
        "id" : 0
      }, {
        "owner" : "Team Chux",
        "size" : 6,
        "edges" : [ {
          "id" : 2
        }, {
          "id" : 2
        } ],
        "maxSize" : 1,
        "location" : {
          "x" : 5,
          "y" : 5
        },
        "id" : 0
      } ]
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get games index
 * List all teams 
 *
 * returns List
 **/
exports.listGames = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "endedAt" : 6,
  "startedAt" : 0,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "participants" : [ {
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
  } ],
  "status" : "status"
}, {
  "endedAt" : 6,
  "startedAt" : 0,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "participants" : [ {
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
  } ],
  "status" : "status"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


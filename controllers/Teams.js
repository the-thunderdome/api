'use strict';

var utils = require('../utils/writer.js');
var Teams = require('../service/TeamsService');

module.exports.getTeam = function getTeam (req, res, next, teamId) {
  Teams.getTeam(teamId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listTeams = function listTeams (req, res, next) {
  Teams.listTeams()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

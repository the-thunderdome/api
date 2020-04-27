'use strict';

var utils = require('../utils/writer.js');
var Humans = require('../service/HumansService');

module.exports.getGame = function getGame (req, res, next, gameId) {
  Humans.getGame(gameId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeam = function getTeam (req, res, next, teamId) {
  Humans.getTeam(teamId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listGames = function listGames (req, res, next) {
  Humans.listGames()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listTeams = function listTeams (req, res, next) {
  Humans.listTeams()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

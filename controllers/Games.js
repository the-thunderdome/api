'use strict';

var utils = require('../utils/writer.js');
var Games = require('../service/GamesService');

module.exports.getGame = function getGame (req, res, next, gameId) {
  Games.getGame(gameId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listGames = function listGames (req, res, next) {
  Games.listGames()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

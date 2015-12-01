var request = require('request');
var auth    = require('../../config/auth.js');

module.exports = function(app) {

	// Search for a query string
  app.route('/search/:query')
    .get(function(req, res, next) {
      var query = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients="
                  + req.params.query + "&number=25";
      var options = {
        url: query,
        headers: {
          'X-Mashape-Key': auth.spoonacularAPIkey,
          'Accept': 'application/json'
        }
      };
      request(options, function(err, response, data) {
        if (err) {
          console.log(err);
        }
        res.send(data);
      });
    });

  // Will find a single recipe by ID
  app.route('/:recipeId')
    .get(function(req, res, next) {
      var query = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients="
                  + req.params.recipeId + "&number=25";
      var options = {
        url: query,
        headers: {
          'X-Mashape-Key': auth.spoonacularAPIkey,
          'Accept': 'application/json'
        }
      };
      request(options, function(err, response, data) {
        if (err) {
          console.log(err);
        }
        res.send(data);
      });
    });
};

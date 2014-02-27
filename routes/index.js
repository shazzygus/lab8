var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  projects.grid = false;
  console.log(projects);
  res.render('index', projects);
};

exports.viewGrid = function(req, res) {
  projects.grid = true;
  res.render('index', projects);
};
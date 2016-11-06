
// initialize db
var low = require('lowdb');
var db = low('db.json');

db._.mixin(require('underscore-db')); // for getById
db.defaults({
  products: [],
  orders: [],
  tradeShows: [],
  taxRateLists: []
}).value(); // define default schema

module.exports.db = db;

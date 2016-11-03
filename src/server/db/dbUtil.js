
// initialize db
var low = require('lowdb');
var db = low('db.json');

db._.mixin(require('underscore-db')); // for getById
db.defaults({ products: [], orders: []}).value(); // define default schema


// get products
var getProducts = () => {
  const products = db.get('products').value();
  return products;
};

module.exports = {
  db: db,
  getProducts: getProducts
};

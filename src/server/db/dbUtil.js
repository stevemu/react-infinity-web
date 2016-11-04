
// initialize db
var low = require('lowdb');
var db = low('db.json');

db._.mixin(require('underscore-db')); // for getById
db.defaults({ products: [], orders: []}).value(); // define default schema

module.exports.db = db;

// get products
module.exports.getProducts = () => {
  const products = db.get('products').value();
  return products;
};

module.exports.getProductById = (id) => {
  const product = db.get('products').getById(id).value();
  return product;
};

module.exports.addProduct = (product) => {
  db.get('products').push(product).value();
};

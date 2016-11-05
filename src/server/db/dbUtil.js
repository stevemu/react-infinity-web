
// initialize db
var low = require('lowdb');
var db = low('db.json');

db._.mixin(require('underscore-db')); // for getById
db.defaults({ products: [], orders: []}).value(); // define default schema

module.exports.db = db;

// products
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

module.exports.updateProduct = (id, product) => {
  db.get('products').getById(id).assign(product).value();
};

module.exports.deleteProduct = (id) => {
  db.get('products').remove({id: id}).value();
};

// orders

module.exports.getOrders = () => {
  const orders = db.get('orders').value();
  return orders;
};

module.exports.getOrderById = (id) => {
  const order = db.get('orders').getById(id).value();
  return order;
};

module.exports.addOrder = (order) => {
  db.get('orders').push(order).value();
};

module.exports.updateOrder = (id, order) => {
  db.get('orders').getById(id).assign(order).value();
};

module.exports.deleteOrder = (id) => {
  db.get('orders').remove({id: id}).value();
};
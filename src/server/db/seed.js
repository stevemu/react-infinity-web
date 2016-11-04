
const dbUtil = require("./dbUtil");
const db = dbUtil.db;

var products = [
  {
    "id": "1",
    "model": "Example-1",
    "price": 4000,
    "profileImage": "Evoke_black_1.png"
  },
  {
    "id": "2",
    "model": "Example-2",
    "price": 5000,
    "profileImage": "Iyashi_black-black_1.jpg"
  }
];

// add mock products to db
products.forEach((product, index) => {
  const productInDb = db.get('products').getById(product.id).value();
  if (!productInDb) { // if product does not exists already
    db.get('products').push(product).value(); // add to db
  }
});

//todo: seed orders

var orders = [
  {
    "id": "1",
    "name": "Qi",
    "itemId": 1,
    "color": "black",
    "price": 255325.3,
    "shipTo": {
      "name": "Jane Smith",
      "address": "123 Maple Street",
      "city": "Pretendville",
      "state": "NY",
      "zip": "12345"
    },
    "billTo": {
      "name": "Jane Smith",
      "address": "123 Maple Street",
      "city": "Pretendville",
      "state": "NY",
      "zip": "12345"
    }
  },
  {
    "id": "2",
    "name": "Osa",
    "itemId": 1,
    "color": "black",
    "price": 2512355.3,
    "shipTo": {
      "name": "Jane Smith",
      "address": "123 Maple Street",
      "city": "Pretendville",
      "state": "NY",
      "zip": "12345"
    },
    "billTo": {
      "name": "Jane Smith",
      "address": "123 Maple Street",
      "city": "Pretendville",
      "state": "NY",
      "zip": "12345"
    }
  }
];

orders.forEach((order, index) => {
  const orderInDb = db.get('orders').getById(order.id).value();
  if (!orderInDb) { // if order does not exists already
    db.get('orders').push(order).value(); // add to db
  }
});
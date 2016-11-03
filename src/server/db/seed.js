
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
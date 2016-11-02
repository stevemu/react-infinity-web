# Infinity web portal

## Features

* Node.js serve the index.html and bundled js
* css is bundled with webpack too
* webpack watches new changes and compile the new bundle.js on-the-fly
* Use react-router
* the server (with express.js) handles the browser history fall-back
* use SASS
* support hot reloading during development. For production, set env NODE_ENV="production" to disable hot reloading.
* include a Procfile for deploying for Heroku, this tells Heroku how to start run the server. It assumes the bundle.js is already in the repo. So don't gitignore the bundle.js file.

## How to start developing

make sure $NODE_ENV is not "production"
```
npm install
npm start
```

Check your http://localhost:3000/

## Deploy to production (ssh on a remote server)

```
export NODE_ENV="production"
npm install
npm run build
npm start
```

## Deploy to Heroku

```
heroku login
heroku create
npm run build
git commit -am "update bundle.js"
git push heroku master
```

## APIs

### product
[get all products](API_Documentation/product/ShowAllProducts.md)
[get one product](API_Documentation/product/ShowOneProduct.md)
[post a product](API_Documentation/product/AddOneProduct.md)

### order
[get all orders](API_Documentation/orders/ShowAllOrders.md)
[get one order](API_Documentation/orders/ShowOneOrder.md)
[post an order](API_Documentation/orders/AddOneOrder.md)


mit li
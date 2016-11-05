# Infinity web portal

## Features

* Node.js serve the index.html and bundled.js in production
* webpack-dev server watches new changes and compile the new bundle.js on-the-fly in development; in this case, the node.js server only serve API
* support hot reloading during development when using dev server.
* css is bundled with webpack
* Use react-router
* browser history fall-back
* use SASS
* backend port is specified in package.json via cross-env for easy change
* whether the envrionment is production is specified at envrionment variable NODE_ENV=production||or_other


## Need Install global npm modules first

```
sudo npm install webpack -g
sudo npm install cross-env -g
sudo npm install nodemon -g
```

## For deploying to ubuntu

```
sudo apt-get update
sudo apt-get install build-essential libssl-dev libffi-dev python-dev

```

## How to start developing

```
export NODE_ENV=not_production
npm install
npm run server
npm run dev-server
```

Check your http://localhost:8080/

## How to deploy to production

to change the port, go to package.json and change 3000 to the port you desired

```
export NODE_ENV="production" 
or source prod_env_var
npm install
npm run build-prod
npm run server
```

Check your http://${server}:3000/

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

todo

move Add Product isndie Products
delivery option api
trade show api
    add trade show
    rate list
    
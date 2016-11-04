**Add one product**
----
Post a json data about one new product

* **URL**

  <_/api/products_>

* **Method:**

  `POST` 

* **Data Params**

  ```json
  {
    "model": "it900",
    "price": 900,
    "profileImage": "1223423.png"
  };
  ```
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "status": "success"
    }
    ```
 

* **Sample Call:**

   ```javascript
      fetch(PRODUCTS_ENDPOINT, {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(newProduct)
       })

   ```

* **Notes:**

 
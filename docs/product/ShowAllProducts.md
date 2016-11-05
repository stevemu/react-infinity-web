**Show all products**
----
Returns json data of all products

* **URL**

  <_/api/products_>

* **Method:**

  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
      OneProduct
    ]
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`
    **not implemented**

* **Sample Call:**

   ```javascript
   with whatwg-fetch
   fetch(PRODUCTS_ENDPOINT).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        products: json
      });
    }).catch((ex) => {
      console.log(ex);
    })
   ```

* **Notes:**

 
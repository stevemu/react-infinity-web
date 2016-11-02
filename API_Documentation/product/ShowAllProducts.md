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
      {
        "id": 1,
        "model": "Evoke",
        "price": 4000,
        "profileImage": "Evoke_black_1.png",
        "images": {
          "black": [
            "Evoke_black_1.png",
            "Evoke_black_2.png"
          ],
          "brown": [
            "Evoke_brown_1.png",
            "Evoke_brown_2.png"
          ]
        }
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`
    **not implemented**

* **Sample Call:**

   ```javascript
     $.ajax({
         url: "http://localhost:3000/api/products",
         dataType: 'json',
         success: function (data) {
           console.log(data);
           this.setState({
             products: data
           });
         }.bind(this),
         error: function (err) {
           console.log('error: ', err);
         }.bind(this)
       });
   ```

* **Notes:**

 
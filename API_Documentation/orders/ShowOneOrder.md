**Show one product**
----
Returns json data about a single product

* **URL**

  <_/api/products/:id_>

* **Method:**

  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    
      {
        "id": "1",
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
    
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`
    **not implemented**

* **Sample Call:**

   ```javascript

   ```

* **Notes:**

 
**upload a image**
----

* **URL**

  <_/api/image-upload_>

* **Method:**

  `POST` 

* **Data Params**

multipart:
image: the file
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "status": "success",
        "newFilename": "productImage-324234.png"
    }
    ```
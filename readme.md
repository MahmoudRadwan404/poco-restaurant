## Users Login,Registration,Forget,Reset.
### Create new user 
-**POST /signup**
### Verify user's email
-**POST /verify/email**
### Enter to the website
-**POST /login**
### send verification code to user's email.
-**POST /forget**
### Reset password of the user's email.
-**POST /reset**

----------------------------
**POST /signup**
###### body params
```
firstName: string
lastName: string
email: string
phone: string
password: string
confirmPassword: string
```
##### Request payload
```
firstName: string | required
lastName: string | required
email: string | required
phone: string
password: string | required
confirmPassword: string | required
```
**POST /verify/email**
###### body params
```
code: string
```
##### Request payload
```
code: string | required
```
**POST /login**
###### body params
```
email: string
password: string
```
##### Request payload
```
email: string | required
password: string | required
```
**POST /forget**
###### body params
```
email: string
```
##### Request payload
```
email: string | required
```
**POST /reset**
###### body params
```
code: string
password: string
confirmPassword: string
```
##### Request payload
```
code: string | required
password: string | required
confirmPassword: string | required
```
---------------------
## Restaurant categories
### ADD new category
-**POST /category**
### Retrieve dishes related to a specific category
-**GET /category/{categoryId}**
### Retrieve all dishes related to  categories
-**GET /list-categories**
### Update a specific category
**PUT /category/{categoryId}**
### Delete a specific category
**DELETE /category/{categoryId}**

---------------
**POST /category**
###### body params
```
categoryName: string
```
##### Request payload
```
categoryName: string | required
```
**GET /category/:categoryId**
###### Query params
```
categoryId: string
```
##### Request payload
```
categoryId: string | required
```
**GET /listCategories**
###### query params
```
page: number
```

##### response

```
{
      pages: number,
      page: number,
      categories:number
},
{
    categories: object[];
}
```
**PUT /category/:categoryId**
###### query params
```
categoryId: string | required
```
**DELETE /category/:categoryId**
###### query params
```
categoryId: string | required
```
-----------------------------------------------------------------
## Restaurant dishes
### Add new dish
-**POST /dish**
### Delete a specific dish
-**DELETE /dish/{dishId}**
### Update specific dish
-**PUT /dish/{dishId}**
### Retrieve all dishes.
-**GET /dishes**  
### Retrieve a specific dish
-**GET /dish/{dishId}**  

-----------------------------
**POST /dish**
##### body params
```
name: string
categoryId: string
price: number
description: string
ingredients: string
```
##### Request payload
```
name: string | required
categoryId: string | required
price: number | required
description: string
ingredients: string
```
**DELETE /dish/:dishId**
##### query params
```
dishId: string
```
**PUT /dish/:dishId**
##### query params
```
dishId: string
```
**GET /dishes**  
##### query params
```
page: number
```
##### Response

```
{
      pages: number,
      page: number,
      dishes:number
},
{
    dishes:object[]
}
```
**GET /dish/:dishId**  
##### query params
```
dishId: string
```
##### Response
```
dish: object
```
----------------------------------------------------
## Restaurant blogs
### see all restaurant blogs  
-**GET /list-blogs**
### see an specific blog
-**GET /blog/{id}**
### Add new blog
-**POST /blog**
### Update specific blog
-**UPDATE /blog/{id}**
### Delete specific blog
-**DELETE /blog/{id}**
------
**GET /list-blogs**
###### query params
```
page: number
title: string
```
##### response
```
{
      pages: number,
      page: number,
      blogs:number
},
{
    blogs: object[];
}
```
**GET /blog/:id**
###### query params
```
id: string
```
##### response
```
{
    blog: object;
}
```
-**POST /blog**
###### body params
```
title:string
image: buffer
description: string
```
###### request payload
```
image: buffer | required
description: string | required
```
-**UPDATE /blog/:id**
###### query params
```
id: string
```
###### Response
```
{
    msg: "successfully updated"
}
```
-**DELETE /blog/:id**
###### query params
```
id: string
```
###### Response
```
{
    msg: "successfully deleted"
}
```
----------------------------------------------------
## Restaurant cart
### Retrieve cart items
-**GET /cart-items/{userId}**
### Add item to the cart
-**POST /Add-item/{itemId}**
### Delete item
-**DELETE /cart-item/{itemId}**
### Update specific item
-**PUT /cart-items/{ItemId}**

-------
 **GET /cart-items/:userId**
###### Query params 
```
userId: string
```
###### Response
```
 message:object
```
**POST /add-item/:itemId**
###### body params
```
itemId:string | required
NumOfItems: number | required
```
###### request payload
```
itemId:string |required
NumOfItems: number| required
```

 **DELETE /cart-item/:itemId**
###### Query params
```
itemId: string
```
**UPDATE /cart-item/:itemId**
###### Query params
```
itemId: string | required
```
###### body params
```
numOfItem: number| required
```
-----------------------------------------------
## Dishes reviews
### Retrieve items reviews
-**GET /item-reviews/{itemId}**
### Add review to the item
-**POST /Add-review/{itemID}**
### Delete review
-**DELETE /{reviewId}**
### Update review
-**PUT /{reviewId}**

-----------------------------------------
**GET /item-reviews/:itemId**
###### Query params
```
itemId: string
```
###### Response
```
reviews:object[]
```
**POST /add-review/:itemId**
###### Query params
```
itemId: string
```
###### body params
```
rating: number
review:string
name:string
email:string
```
###### Request payload
```
rating: number | required
review: string | required
name: string | required
email: string | required
```
**DELETE /review/:reviewId**
###### Query params
```
reviewId : string
```
**PUT /review/:reviewId**
###### Query params
```
reviewId : string
```
###### body params
```
review : string| required
```
-----------------------------------------
## Restaurant admin
### Retrieve admins
-**GET /admins**
### Retrieve specific admin
-**GET /admin/{id}**
### Add admin
-**POST /Admin**
### Delete admin
-**DELETE /admin/{id}**
### Update specific admin
-**PUT /admin/{id}**
### Retrieve messages
-**GET /Users-messages**

---------------------------------------------

**GET /admins**
###### Response
```
admins: object[]
```
**GET /admin/:adminId**
###### Query params
```
adminId: string | required
```
###### Response
```
admin:object
```
**POST /admin**
###### body params
```
userName: string
email: string
password: string
confirmPassword: string
```
###### Request payload
```
userName: string | required
email: string | required
password: string | required
confirmPassword: string | required
```
**DELETE /admin/:adminId**
###### Query params
```
adminId: string | required
```
**UPDATE /admin/:adminId**
###### Query params
```
adminId: string | required
```
###### body params
```
userName: string | required 
email: string | required
password: string  | required
```
**GET /admin/Users-messages**
###### Response
```
message: object[]
```
---------------------------------------------
### Send message
-**POST /message**
### Subscribe for news
-**POST /subscribe** 
### See frequently asked questions
**GET /questions**
-----------------------------------------------
**POST /message**
###### body params
```
email: string | required
userName: string | required
password: string | required
```
**POST /subscribe**
```
email: string | required
```
**GET /questions**
###### Response
```
questions: object[]
```
**GET /questions/:questionId**
###### Query params
```
questionId: string
```
###### Response
```
question: object
```
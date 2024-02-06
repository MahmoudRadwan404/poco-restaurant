# front office:

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

### Retrieve dishes related to a specific category

-**GET /categories/{categoryId}**

### Retrieve all dishes related to categories

-**GET /categories**

### Retrieve all dishes.

-**GET /dishes**

### Retrieve a specific dish

-**GET /dishes/{dishId}**

### see all restaurant posts in the blog

-**GET /posts**

### see an specific post

-**GET /post/{id}**

### Retrieve cart items

-**GET /carts/{userId}/items**

### Add item to the cart

-**POST /carts/{userId}/items**

### Delete item

-**DELETE /carts/{itemId}**

### Update specific item

-**PUT /carts/{itemId}**

## Dishes reviews

### Retrieve items reviews

-**GET /reviews/{dishId}**

### Add review to the item

-**POST /reviews/{dishId}**

### Delete review

-**DELETE /reviews/{reviewId}**

### Update review

-**PUT /reviews/{reviewId}**

-**POST /messages**

### Subscribe for news

-**POST /subscribe**

### See frequently asked questions

**GET /questions**

### return all user addresses

**GET /users/{userId}/addresses**

### return specific user address

**GET /users/{userId}/addresses/{addressId}**

### add address

**POST /users/{userId}/addresses**

### update address

**PUT /users/{userId}/addresses/{addressId}**

### delete address

**DELETE /users/{userId}/addresses/{addressId}**

### cancel my orders

**DELETE /orders/{orderId}/cancel**

### return my order

**POST /orders/{orderId}/return**

---

# back office:

## Restaurant categories

### ADD new category

-**POST /categories**

### Update a specific category

**PUT /categories/{categoryId}**

### Delete a specific category

**DELETE /categories/{categoryId}**

### Add new dish

-**POST /dishes**

### Delete a specific dish

-**DELETE /dishes/{dishId}**

### Update specific dish

-**PUT /dishes/{dishId}**

### Add new post

-**POST /posts**

### Update specific post

-**UPDATE /posts/{id}**

### Delete specific post

**DELETE /posts/{id}**

## Restaurant admin

### Retrieve admins

-**GET /admins**

### Retrieve specific admin

-**GET /admins/{id}**

### Add admin

-**POST /admins**

### Delete admins

-**DELETE /admins/{id}**

### Update specific admin

-**PUT /admins/{id}**

### Retrieve messages

-**GET /messages**

### admin for mange orders

### returns all orders

**GET /orders**

### return specific order

**GET /orders/{orderId}**

### accept order

**PUT /orders/{orderId}/accept**

### reject order

**PUT /orders/{orderId}/reject**

### return specific spoiled food

**GET /spoiledOrders/{spoiledOrderId}**

### return spoiled food

**GET /spoiledOrders**

### accept spoiled food

**PUT /spoiledOrders/{spoiledOrderId}/accept**

### reject spoiled food

**PUT /spoiledOrders/{spoiledOrderId}/reject**

### create coupon

**POST /coupons**

### GET coupons

**GET /coupons**

### GET specific coupon

**GET /coupons/{couponId}**

### update specific coupon

**PUT /coupons/{couponId}**

### DELETE specific coupon

**DELETE /coupons/{couponId}**

### send coupons

**PUT /coupons/{userId}**

---

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

---

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

---

## Restaurant categories

### ADD new category

-**POST /categories**

### Retrieve dishes related to a specific category

-**GET /categories/{categoryId}**

### Retrieve all dishes related to categories

-**GET /categories**

### Update a specific category

**PUT /categories/{categoryId}**

### Delete a specific category

**DELETE /categories/{categoryId}**

---

**POST /categories**

###### body params

```
categoryName: string
```

##### Request payload

```
categoryName: string | required
```

**GET /categories/:categoryId**

###### Query params

```
categoryId: string
```

##### Request payload

```
categoryId: string | required
```

**GET /categories**

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

**PUT /categories/:categoryId**

###### query params

```
categoryId: string | required
```

**DELETE /categories/:categoryId**

###### query params

```
categoryId: string | required
```

---

## Restaurant dishes

### Add new dish

-**POST /dishes**

### Delete a specific dish

-**DELETE /dishes/{dishId}**

### Update specific dish

-**PUT /dishes/{dishId}**

### Retrieve all dishes.

-**GET /dishes**

### Retrieve a specific dish

-**GET /dishes/{dishId}**

---

**POST /dishes**

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

**DELETE /dishes/:dishId**

##### query params

```
dishId: string
```

**PUT /dishes/:dishId**

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

**GET /dishes/:dishId**

##### query params

```
dishId: string
```

##### Response

```
dish: object
```

---

# Restaurant blog

### see all restaurant posts in the blog

-**GET /posts**

### see an specific post

-**GET /post/{id}**

### Add new post

-**POST /posts**

### Update specific post

-**UPDATE /posts/{id}**

### Delete specific post

## -**DELETE /posts/{id}**

**GET /posts**

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

**GET /posts/:id**

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

-**POST /posts**

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

-**UPDATE /posts/:id**

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

-**DELETE /posts/:id**

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

---

## Restaurant cart

### Retrieve cart items

-**GET /carts/{userId}/items**

### Add item to the cart

-**POST /carts/{userId}/items**

### Delete item

-**DELETE /carts/{itemId}**

### Update specific item

-**PUT /carts/{itemId}**

---

**GET /carts/:userId/items**

###### Query params

```
userId: string
```

###### Response

```
 message:object
```

**POST /carts/:userId/items**

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

**DELETE /carts/:itemId**

###### Query params

```
itemId: string
```

**UPDATE /carts/:itemId**

###### Query params

```
itemId: string | required
```

###### body params

```
numOfItem: number| required
```

---

## front office

## Dishes reviews

### Retrieve items reviews

-**GET /reviews/{dishId}**

### Add review to the item

-**POST /reviews/{dishId}**

### Delete review

-**DELETE /reviews/{reviewId}**

### Update review

-**PUT /reviews/{reviewId}**

---

**GET /reviews/:itemId**

###### Query params

```
itemId: string
```

###### Response

```
reviews:object[]
```

**POST /reviews/:itemId**

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

**DELETE /reviews/:reviewId**

###### Query params

```
reviewId : string
```

**PUT /reviews/:reviewId**

###### Query params

```
reviewId : string
```

###### body params

```
review : string| required
```

---

## Restaurant admin

### Retrieve admins

-**GET /admins**

### Retrieve specific admin

-**GET /admins/{id}**

### Add admin

-**POST /admins**

### Delete admins

-**DELETE /admins/{id}**

### Update specific admin

-**PUT /admins/{id}**

### Retrieve messages

-**GET /messages**

---

**GET /admins**

###### Response

```
admins: object[]
```

**GET /admins/:adminId**

###### Query params

```
adminId: string | required
```

###### Response

```
admin:object
```

**POST /admins**

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

**DELETE /admins/:adminId**

###### Query params

```
adminId: string | required
```

**UPDATE /admins/:adminId**

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

**GET /admins/messages**

###### Response

```
message: object[]
```

---

### Send message

-**POST /messages**

### Subscribe for news

-**POST /subscribe**

### See frequently asked questions

## **GET /questions**

**POST /messages**

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

---

### admin for mange orders

### returns all orders

**GET /orders**

### return specific order

**GET /orders/{orderId}**

### accept order

**PUT /orders/{orderId}/accept**

### reject order

**PUT /orders/{orderId}/reject**

**GET /orders/{orderId}**

###### Request params

```
orderId: string
```

**PUT /orders/{orderId}/accept**

###### Request params

```
orderId: string
```

**PUT /orders/{orderId}/reject**

```
orderId: string
```

---

### return specific spoiled food

**GET /spoiledOrders/{spoiledOrderId}**

### return spoiled food

**GET /spoiledOrders**

### accept spoiled food

**PUT /spoiledOrders/{spoiledOrderId}/accept**

### reject spoiled food

**PUT /spoiledOrders/{spoiledOrderId}/reject**

---

**GET /spoiledOrders/{spoiledOrderId}**

###### Request params

```
spoiledOrderId: string
```

**PUT /spoiledOrders/{spoiledOrderId}/accept**

###### Request params

```
spoiledOrderId: string
```

**PUT /spoiledOrders/{spoiledOrderId}/reject**

###### Request params

```
spoiledOrderId: string
```

---

### address crud

### return all user addresses

**GET /users/{userId}/addresses**

### return specific user address //put it as default

**GET /users/{userId}/addresses/{addressId}**

### add address

**POST /users/{userId}/addresses**

### update address

**PUT /users/{userId}/addresses/{addressId}**

### delete address

**DELETE /users/{userId}/addresses/{addressId}**

---

**GET /users/{userId}/addresses**

###### Request params

```
userId: string
```

**GET /users/{userId}/addresses/{addressId}**

###### Request params

```
userId: string
addressId: string
```

**POST /users/{userId}/addresses**

###### Request params

```
userId: string

```

###### Request payload

```
area: string | required
streetName: string | required
buildingType: string | required
buildingNumber: string | required
landMark: string | required
mobile: string | required
```

**DELETE /users/{userId}/addresses/{addressId}**

###### Request params

```
userId: string
addressId: string

```

**PUT /users/{userId}/addresses/{addressId}**

###### Request params

```
userId: string
addressId: string
```

###### Request payload

```
area: string | optional
streetName: string | optional
buildingType: string | optional
buildingNumber: string | optional
landMark: string | optional
mobile: string | optional
```

---

### cancel my orders

**DELETE /orders/{orderId}/cancel**

###### Request params

```
orderId: string
```

---

---

### return my order

**POST /orders/{orderId}/return**

###### Request params

```
orderId: string
```

###### Request payload

```
image: string
cause: string
```

---

### create coupon

**POST /coupons**

### GET coupons

**GET /coupons**

### GET specific coupon

**GET /coupons/{couponId}**

### update specific coupon

**PUT /coupons/{couponId}**

### DELETE specific coupon

**DELETE /coupons/{couponId}**

### send coupons

**PUT /coupons/{userId}**

---

**POST /coupons**

### Request payload

```
typeOfCoupon: string
value: number
minimumOrder: number
numOfUsers:number
```

**GET /coupons/{couponId}**

###### Request params

```
couponId: string
```

**PUT /coupons/{couponId}**

###### Request params

```
couponId: string
```

**PUT /coupons/{userId}**

###### Request params

```
userId: string
```

**DELETE /coupons/{couponId}**

```
couponId: string
```

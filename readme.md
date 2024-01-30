**POST /signUp**

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

---------------------//CRUD-blogs,CRUD-cart,CRUD-reviews/////

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
page: string
```

##### response

```
{
      pages: number,
      page: string,
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
page: string
```
##### Response

```
{
      pages: number,
      page: string,
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




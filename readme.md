# Poco Restaurant API 🍽️

A comprehensive REST API for managing restaurant operations including menu management, orders, user authentication, reviews, and administrative functions.

## 📋 Table of Contents

- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Postman Collection](#postman-collection)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## ✨ Features

- **User Authentication**: Complete signup, login, email verification, and password reset
- **Menu Management**: CRUD operations for categories and dishes
- **Shopping Cart**: Add, update, and remove items from cart
- **Order Management**: Order processing, acceptance, rejection, and returns
- **Review System**: User reviews and ratings for dishes
- **Address Management**: User delivery addresses
- **Blog/Posts**: Content management for recipes and posts
- **Coupon System**: Discount management and application
- **Admin Panel**: Administrative functions and user management
- **Contact & Support**: Contact forms, newsletter, and FAQ

## 🚀 API Endpoints

### Authentication
- `POST /signup` - User registration
- `POST /verify/email` - Email verification
- `POST /login` - User login
- `POST /forget` - Forgot password
- `POST /reset` - Reset password

### Categories
- `GET /categories` - Get all categories (with pagination)
- `GET /categories/:id` - Get category by ID
- `POST /categories` - Create new category (Auth required)
- `PUT /categories/:id` - Update category (Auth required)
- `DELETE /categories/:id` - Delete category (Auth required)

### Dishes
- `GET /dishes` - Get all dishes (with pagination)
- `GET /dishes/:id` - Get dish by ID
- `POST /dishes` - Create new dish (Auth required)
- `PUT /dishes/:id` - Update dish (Auth required)
- `DELETE /dishes/:id` - Delete dish (Auth required)

### Posts/Blogs
- `GET /posts` - Get all posts (with pagination and search)
- `GET /post/:id` - Get post by ID
- `POST /posts` - Create new post (Auth required, with file upload)
- `PUT /posts/:id` - Update post (Auth required, with file upload)
- `DELETE /posts/:id` - Delete post (Auth required)

### Shopping Cart
- `GET /cart/:userId/items` - Get user's cart items (Auth required)
- `POST /cart/:userId/items` - Add item to cart (Auth required)
- `PUT /cart/:itemId` - Update cart item quantity (Auth required)
- `DELETE /cart/:itemId` - Remove item from cart (Auth required)

### Reviews
- `GET /reviews/:dishId` - Get reviews for a dish
- `POST /reviews/:dishId` - Add review (Auth required)
- `PUT /reviews/:reviewId` - Update review (Auth required)
- `DELETE /reviews/:reviewId` - Delete review (Auth required)

### User Addresses
- `GET /users/:userId/addresses` - Get user addresses (Auth required)
- `GET /users/:userId/addresses/:addressId` - Get specific address (Auth required)
- `POST /users/:userId/addresses` - Add new address (Auth required)
- `PUT /users/:userId/addresses/:addressId` - Update address (Auth required)
- `DELETE /users/:userId/addresses/:addressId` - Delete address (Auth required)

### Orders
- `GET /orders` - Get all orders (Auth required)
- `GET /orders/:orderId` - Get order by ID (Auth required)
- `PUT /orders/:orderId/accept` - Accept order (Auth required)
- `PUT /orders/:orderId/reject` - Reject order (Auth required)
- `DELETE /orders/:orderId/cancel` - Cancel order (Auth required)
- `POST /orders/:orderId/return` - Return order (Auth required)

### Spoiled Orders
- `GET /spoiledOrders` - Get all spoiled orders (Auth required)
- `GET /spoiledOrders/:id` - Get spoiled order by ID (Auth required)
- `PUT /spoiledOrders/:id/accept` - Accept spoiled order (Auth required)
- `PUT /spoiledOrders/:id/reject` - Reject spoiled order (Auth required)

### Coupons
- `GET /coupons` - Get all coupons (Auth required)
- `GET /coupons/:id` - Get coupon by ID (Auth required)
- `POST /coupons` - Create coupon (Auth required)
- `PUT /coupons/:id` - Update coupon (Auth required)
- `DELETE /coupons/:id` - Delete coupon (Auth required)
- `PUT /coupons/:userId` - Apply coupon to user (Auth required)

### Admin Management
- `GET /admins` - Get all admins (Auth required)
- `GET /admins/:id` - Get admin by ID (Auth required)
- `POST /admins` - Create admin (Auth required)
- `PATCH /admins/:id` - Update admin (Auth required)
- `DELETE /admins/:id` - Delete admin (Auth required)
- `GET /messages` - Get messages (Auth required)

### Contact & Support
- `POST /contactUs` - Submit contact form
- `POST /subscribe` - Subscribe to newsletter
- `GET /faq` - Get FAQ

## 🔧 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/poco-restaurant-api.git
   cd poco-restaurant-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the server**
   ```bash
   npm start
   ```

The API will be available at `http://localhost:4000`

## 🔐 Authentication

Most endpoints require authentication using Bearer tokens. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

Obtain tokens through the login endpoint after successful authentication.

## 📮 Postman Collection

Import the complete API collection into Postman for easy testing:

### Quick Import
1. Open Postman
2. Click "Import" button
3. Select "Raw text" tab
4. Paste the JSON collection below
5. Click "Continue" and then "Import"

### Postman Collection JSON

```json
{
    "info": {
      "name": "Poco Restaurant API",
      "description": "Complete API collection for Poco Restaurant application",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
      {
        "name": "Authentication",
        "item": [
          {
            "name": "Sign Up",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"email\": \"john.doe@example.com\",\n  \"phone\": \"+1234567890\",\n  \"password\": \"password123\",\n  \"confirmPassword\": \"password123\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/signup",
                "host": ["{{baseUrl}}"],
                "path": ["signup"]
              }
            }
          },
          {
            "name": "Verify Email",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"code\": \"123456\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/verify/email",
                "host": ["{{baseUrl}}"],
                "path": ["verify", "email"]
              }
            }
          },
          {
            "name": "Login",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"email\": \"john.doe@example.com\",\n  \"password\": \"password123\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/login",
                "host": ["{{baseUrl}}"],
                "path": ["login"]
              }
            }
          },
          {
            "name": "Forgot Password",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"email\": \"john.doe@example.com\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/forget",
                "host": ["{{baseUrl}}"],
                "path": ["forget"]
              }
            }
          },
          {
            "name": "Reset Password",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"code\": \"123456\",\n  \"password\": \"newPassword123\",\n  \"confirmPassword\": \"newPassword123\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/reset",
                "host": ["{{baseUrl}}"],
                "path": ["reset"]
              }
            }
          }
        ]
      },
      {
        "name": "Categories",
        "item": [
          {
            "name": "Get All Categories",
            "request": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "{{baseUrl}}/categories?page=1",
                "host": ["{{baseUrl}}"],
                "path": ["categories"],
                "query": [
                  {
                    "key": "page",
                    "value": "1"
                  }
                ]
              }
            }
          },
          {
            "name": "Get Category by ID",
            "request": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "{{baseUrl}}/categories/{{categoryId}}",
                "host": ["{{baseUrl}}"],
                "path": ["categories", "{{categoryId}}"]
              }
            }
          },
          {
            "name": "Create Category",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"categoryName\": \"Italian Cuisine\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/categories",
                "host": ["{{baseUrl}}"],
                "path": ["categories"]
              }
            }
          },
          {
            "name": "Update Category",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"categoryName\": \"Updated Category Name\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/categories/{{categoryId}}",
                "host": ["{{baseUrl}}"],
                "path": ["categories", "{{categoryId}}"]
              }
            }
          },
          {
            "name": "Delete Category",
            "request": {
              "method": "DELETE",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/categories/{{categoryId}}",
                "host": ["{{baseUrl}}"],
                "path": ["categories", "{{categoryId}}"]
              }
            }
          }
        ]
      },
      {
        "name": "Dishes",
        "item": [
          {
            "name": "Get All Dishes",
            "request": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "{{baseUrl}}/dishes?page=1",
                "host": ["{{baseUrl}}"],
                "path": ["dishes"],
                "query": [
                  {
                    "key": "page",
                    "value": "1"
                  }
                ]
              }
            }
          },
          {
            "name": "Get Dish by ID",
            "request": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "{{baseUrl}}/dishes/{{dishId}}",
                "host": ["{{baseUrl}}"],
                "path": ["dishes", "{{dishId}}"]
              }
            }
          },
          {
            "name": "Create Dish",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"name\": \"Margherita Pizza\",\n  \"categoryId\": \"{{categoryId}}\",\n  \"price\": 12.99,\n  \"description\": \"Classic Italian pizza with fresh tomatoes and mozzarella\",\n  \"ingredients\": \"Tomato sauce, mozzarella cheese, fresh basil\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/dishes",
                "host": ["{{baseUrl}}"],
                "path": ["dishes"]
              }
            }
          },
          {
            "name": "Update Dish",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"name\": \"Updated Dish Name\",\n  \"price\": 15.99,\n  \"description\": \"Updated description\",\n  \"ingredients\": \"Updated ingredients\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/dishes/{{dishId}}",
                "host": ["{{baseUrl}}"],
                "path": ["dishes", "{{dishId}}"]
              }
            }
          },
          {
            "name": "Delete Dish",
            "request": {
              "method": "DELETE",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/dishes/{{dishId}}",
                "host": ["{{baseUrl}}"],
                "path": ["dishes", "{{dishId}}"]
              }
            }
          }
        ]
      },
      {
        "name": "Posts/Blogs",
        "item": [
          {
            "name": "Get All Posts",
            "request": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "{{baseUrl}}/posts?page=1&title=recipe",
                "host": ["{{baseUrl}}"],
                "path": ["posts"],
                "query": [
                  {
                    "key": "page",
                    "value": "1"
                  },
                  {
                    "key": "title",
                    "value": "recipe"
                  }
                ]
              }
            }
          },
          {
            "name": "Get Post by ID",
            "request": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "{{baseUrl}}/post/{{postId}}",
                "host": ["{{baseUrl}}"],
                "path": ["post", "{{postId}}"]
              }
            }
          },
          {
            "name": "Create Post",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "formdata",
                "formdata": [
                  {
                    "key": "title",
                    "value": "New Recipe Post",
                    "type": "text"
                  },
                  {
                    "key": "description",
                    "value": "This is a description of the new recipe post",
                    "type": "text"
                  },
                  {
                    "key": "image",
                    "type": "file",
                    "src": ""
                  }
                ]
              },
              "url": {
                "raw": "{{baseUrl}}/posts",
                "host": ["{{baseUrl}}"],
                "path": ["posts"]
              }
            }
          },
          {
            "name": "Update Post",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "formdata",
                "formdata": [
                  {
                    "key": "title",
                    "value": "Updated Post Title",
                    "type": "text"
                  },
                  {
                    "key": "description",
                    "value": "Updated description",
                    "type": "text"
                  },
                  {
                    "key": "image",
                    "type": "file",
                    "src": ""
                  }
                ]
              },
              "url": {
                "raw": "{{baseUrl}}/posts/{{postId}}",
                "host": ["{{baseUrl}}"],
                "path": ["posts", "{{postId}}"]
              }
            }
          },
          {
            "name": "Delete Post",
            "request": {
              "method": "DELETE",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/posts/{{postId}}",
                "host": ["{{baseUrl}}"],
                "path": ["posts", "{{postId}}"]
              }
            }
          }
        ]
      },
      {
        "name": "Shopping Cart",
        "item": [
          {
            "name": "Get Cart Items",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/cart/{{userId}}/items",
                "host": ["{{baseUrl}}"],
                "path": ["cart", "{{userId}}", "items"]
              }
            }
          },
          {
            "name": "Add Item to Cart",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"itemId\": \"{{dishId}}\",\n  \"NumOfItems\": 2\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/cart/{{userId}}/items",
                "host": ["{{baseUrl}}"],
                "path": ["cart", "{{userId}}", "items"]
              }
            }
          },
          {
            "name": "Update Cart Item",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"numOfItem\": 3\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/cart/{{itemId}}",
                "host": ["{{baseUrl}}"],
                "path": ["cart", "{{itemId}}"]
              }
            }
          },
          {
            "name": "Remove Item from Cart",
            "request": {
              "method": "DELETE",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/cart/{{itemId}}",
                "host": ["{{baseUrl}}"],
                "path": ["cart", "{{itemId}}"]
              }
            }
          }
        ]
      },
      {
        "name": "Reviews",
        "item": [
          {
            "name": "Get Dish Reviews",
            "request": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "{{baseUrl}}/reviews/{{dishId}}",
                "host": ["{{baseUrl}}"],
                "path": ["reviews", "{{dishId}}"]
              }
            }
          },
          {
            "name": "Add Review",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"rating\": 5,\n  \"review\": \"Excellent dish! Highly recommended.\",\n  \"name\": \"John Doe\",\n  \"email\": \"john.doe@example.com\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/reviews/{{dishId}}",
                "host": ["{{baseUrl}}"],
                "path": ["reviews", "{{dishId}}"]
              }
            }
          },
          {
            "name": "Update Review",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"review\": \"Updated review text\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/reviews/{{reviewId}}",
                "host": ["{{baseUrl}}"],
                "path": ["reviews", "{{reviewId}}"]
              }
            }
          },
          {
            "name": "Delete Review",
            "request": {
              "method": "DELETE",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/reviews/{{reviewId}}",
                "host": ["{{baseUrl}}"],
                "path": ["reviews", "{{reviewId}}"]
              }
            }
          }
        ]
      },
      {
        "name": "User Addresses",
        "item": [
          {
            "name": "Get User Addresses",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/users/{{userId}}/addresses",
                "host": ["{{baseUrl}}"],
                "path": ["users", "{{userId}}", "addresses"]
              }
            }
          },
          {
            "name": "Get Address by ID",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/users/{{userId}}/addresses/{{addressId}}",
                "host": ["{{baseUrl}}"],
                "path": ["users", "{{userId}}", "addresses", "{{addressId}}"]
              }
            }
          },
          {
            "name": "Add Address",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"area\": \"Downtown\",\n  \"streetName\": \"Main Street\",\n  \"buildingType\": \"Apartment\",\n  \"buildingNumber\": \"123\",\n  \"landMark\": \"Near Central Park\",\n  \"mobile\": \"+1234567890\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/users/{{userId}}/addresses",
                "host": ["{{baseUrl}}"],
                "path": ["users", "{{userId}}", "addresses"]
              }
            }
          },
          {
            "name": "Update Address",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"area\": \"Updated Area\",\n  \"streetName\": \"Updated Street\",\n  \"buildingType\": \"Updated Building Type\",\n  \"buildingNumber\": \"Updated Number\",\n  \"landMark\": \"Updated Landmark\",\n  \"mobile\": \"Updated Mobile\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/users/{{userId}}/addresses/{{addressId}}",
                "host": ["{{baseUrl}}"],
                "path": ["users", "{{userId}}", "addresses", "{{addressId}}"]
              }
            }
          },
          {
            "name": "Delete Address",
            "request": {
              "method": "DELETE",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/users/{{userId}}/addresses/{{addressId}}",
                "host": ["{{baseUrl}}"],
                "path": ["users", "{{userId}}", "addresses", "{{addressId}}"]
              }
            }
          }
        ]
      },
      {
        "name": "Orders",
        "item": [
          {
            "name": "Get All Orders",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/orders",
                "host": ["{{baseUrl}}"],
                "path": ["orders"]
              }
            }
          },
          {
            "name": "Get Order by ID",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/orders/{{orderId}}",
                "host": ["{{baseUrl}}"],
                "path": ["orders", "{{orderId}}"]
              }
            }
          },
          {
            "name": "Accept Order",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/orders/{{orderId}}/accept",
                "host": ["{{baseUrl}}"],
                "path": ["orders", "{{orderId}}", "accept"]
              }
            }
          },
          {
            "name": "Reject Order",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/orders/{{orderId}}/reject",
                "host": ["{{baseUrl}}"],
                "path": ["orders", "{{orderId}}", "reject"]
              }
            }
          },
          {
            "name": "Cancel Order",
            "request": {
              "method": "DELETE",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/orders/{{orderId}}/cancel",
                "host": ["{{baseUrl}}"],
                "path": ["orders", "{{orderId}}", "cancel"]
              }
            }
          },
          {
            "name": "Return Order",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"image\": \"base64_image_string\",\n  \"cause\": \"Reason for return\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/orders/{{orderId}}/return",
                "host": ["{{baseUrl}}"],
                "path": ["orders", "{{orderId}}", "return"]
              }
            }
          }
        ]
      },
      {
        "name": "Spoiled Orders",
        "item": [
          {
            "name": "Get All Spoiled Orders",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/spoiledOrders",
                "host": ["{{baseUrl}}"],
                "path": ["spoiledOrders"]
              }
            }
          },
          {
            "name": "Get Spoiled Order by ID",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/spoiledOrders/{{spoiledOrderId}}",
                "host": ["{{baseUrl}}"],
                "path": ["spoiledOrders", "{{spoiledOrderId}}"]
              }
            }
          },
          {
            "name": "Accept Spoiled Order",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/spoiledOrders/{{spoiledOrderId}}/accept",
                "host": ["{{baseUrl}}"],
                "path": ["spoiledOrders", "{{spoiledOrderId}}", "accept"]
              }
            }
          },
          {
            "name": "Reject Spoiled Order",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/spoiledOrders/{{spoiledOrderId}}/reject",
                "host": ["{{baseUrl}}"],
                "path": ["spoiledOrders", "{{spoiledOrderId}}", "reject"]
              }
            }
          }
        ]
      },
      {
        "name": "Coupons",
        "item": [
          {
            "name": "Get All Coupons",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/coupons",
                "host": ["{{baseUrl}}"],
                "path": ["coupons"]
              }
            }
          },
          {
            "name": "Get Coupon by ID",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/coupons/{{couponId}}",
                "host": ["{{baseUrl}}"],
                "path": ["coupons", "{{couponId}}"]
              }
            }
          },
          {
            "name": "Create Coupon",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"typeOfCoupon\": \"percentage\",\n  \"value\": 20,\n  \"minimumOrder\": 50,\n  \"numOfUsers\": 100\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/coupons",
                "host": ["{{baseUrl}}"],
                "path": ["coupons"]
              }
            }
          },
          {
            "name": "Update Coupon",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"typeOfCoupon\": \"fixed\",\n  \"value\": 10,\n  \"minimumOrder\": 30,\n  \"numOfUsers\": 50\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/coupons/{{couponId}}",
                "host": ["{{baseUrl}}"],
                "path": ["coupons", "{{couponId}}"]
              }
            }
          },
          {
            "name": "Delete Coupon",
            "request": {
              "method": "DELETE",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/coupons/{{couponId}}",
                "host": ["{{baseUrl}}"],
                "path": ["coupons", "{{couponId}}"]
              }
            }
          },
          {
            "name": "Apply Coupon to User",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/coupons/{{userId}}",
                "host": ["{{baseUrl}}"],
                "path": ["coupons", "{{userId}}"]
              }
            }
          }
        ]
      },
      {
        "name": "Admin Management",
        "item": [
          {
            "name": "Get All Admins",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/admins",
                "host": ["{{baseUrl}}"],
                "path": ["admins"]
              }
            }
          },
          {
            "name": "Get Admin by ID",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/admins/{{adminId}}",
                "host": ["{{baseUrl}}"],
                "path": ["admins", "{{adminId}}"]
              }
            }
          },
          {
            "name": "Create Admin",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"userName\": \"newadmin\",\n  \"email\": \"admin@example.com\",\n  \"password\": \"adminpass123\",\n  \"confirmPassword\": \"adminpass123\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/admins",
                "host": ["{{baseUrl}}"],
                "path": ["admins"]
              }
            }
          },
          {
            "name": "Update Admin",
            "request": {
              "method": "PATCH",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                },
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"userName\": \"updatedadmin\",\n  \"email\": \"updated@example.com\",\n  \"password\": \"newpassword123\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/admins/{{adminId}}",
                "host": ["{{baseUrl}}"],
                "path": ["admins", "{{adminId}}"]
              }
            }
          },
          {
            "name": "Delete Admin",
            "request": {
              "method": "DELETE",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/admins/{{adminId}}",
                "host": ["{{baseUrl}}"],
                "path": ["admins", "{{adminId}}"]
              }
            }
          },
          {
            "name": "Get Messages",
            "request": {
              "method": "GET",
              "header": [
                {
                  "key": "Authorization",
                  "value": "Bearer {{authToken}}"
                }
              ],
              "url": {
                "raw": "{{baseUrl}}/messages",
                "host": ["{{baseUrl}}"],
                "path": ["messages"]
              }
            }
          }
        ]
      },
      {
        "name": "Contact & Support",
        "item": [
          {
            "name": "Contact Us",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"email\": \"user@example.com\",\n  \"userName\": \"John Doe\",\n  \"message\": \"I need help with my order\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/contactUs",
                "host": ["{{baseUrl}}"],
                "path": ["contactUs"]
              }
            }
          },
          {
            "name": "Subscribe Newsletter",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n  \"email\": \"subscriber@example.com\"\n}"
              },
              "url": {
                "raw": "{{baseUrl}}/subscribe",
                "host": ["{{baseUrl}}"],
                "path": ["subscribe"]
              }
            }
          },
          {
            "name": "Get FAQ",
            "request": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "{{baseUrl}}/faq",
                "host": ["{{baseUrl}}"],
                "path": ["faq"]
              }
            }
          }
        ]
      }
    ],
    "variable": [
      {
        "key": "baseUrl",
        "value": "http://localhost:3000",
        "type": "string"
      }
    ]
  }

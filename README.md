# rest_api

Node/Express/PostgreSQL REST API for e-commerce

## Database Schema

This is a mockup for an e-commerce site that sells my books. Here's a proposed database schema:

CREATE TABLE books (
  id integer PRIMARY KEY UNIQUE,
  name varchar(50),
  author varchar(20),
  publisher varchar(20)
  description varchar(1000),
  page_count integer,
  ISBN-10 integer,
  ISBN-13 integer,
  rating decimal,
  price decimal,
  in_stock boolean
);

CREATE TABLE user (
    id integer PRIMARY KEY UNIQUE,
    name varchar(50),
    address_1 varchar(20),
    address_2 varchar(20),
    city varchar(20),
    state varchar(2),
    zip integer,
    credit_card integer
);

CREATE TABLE cart (
    id integer PRIMARY KEY UNIQUE { = user.id}
    total_items integer,
    total_price decimal,
    {by book id}_incart boolean
);

## Endpoints

Proposed Endpoints

+ POST /register
+ POST /login
+ GET /products?category={categoryId}
+ GET /products/{productId}
+ GET /users
+ GET /users/{userId}
+ PUT /users/{userId}
+ POST /cart/{cartId}/checkout
+ GET /orders
+ GET /orders/{orderId}

## Technologies Used
+ Node / Express.js
+ PostgreSQL
+ pgtools
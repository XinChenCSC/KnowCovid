# Terrific Coders - KnowCOVID


## Overview

KnowCOVID is a news application designed to deliver coronavirus news. Our content
is exclusive to written news articles; news from videos and podcasts are avoided.
Articles are updated each week in order to keep content up-to-date. The news
we provide relates more to the coronavirus pandemic in the U.S rather then
the situation in other countries. 


## Getting Started
This README.md is visible because you are in the 'Terrific_Coders_PROJECT'.
Please download the repository. All relevant code is in the folder 
'Terrific_Coders_PROJECT-master'. ---Xin, Janice, I coulden't get the
website to run. Node modules is missing? Fix this please or replace
this comment with the appropriate directions for the professor to
run the website---


## Requirements

(___TODO__: List out any technologies needed to run your project_)


## Data Model

(___TODO__: A description of your application's data and their relationships to each other_)

The application will store user, items, and orders.

- Users can have many orders.
- Orders can have many items.

(___TODO__: Sample resources_)

An Example `User`:

```javascript
{
  id: 5,
  firstName: "Mary",
  lastName: "Jane"
}
```

An Example `Item`:

```javascript
{
  id: 3,
  name: "Lamp",
  price: "$19.99"
}
```

An Example `Order`:

```javascript
{
  id: 1,
  user_id: 5,// a reference to a User object
}
```

An Example `OrderItems`:

```javascript
{
  item_id: 3,
  order_id: 1 // References an Order object
}
```

## Site map

(___TODO__: Draw out a site map that shows how pages are related to each other_)

Here's an [example](https://www.kauligmedia.com/media/1589/sitemap-01.jpg). Mostly looking for the names of pages and where they flow to.

## User Stories or Use Cases

(___TODO__: Write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format)_)

1. As non-registered user, I can create a new account on the site.
2. As a user, I can log in to the site.
3. As a user, I can view items for sale.
4. As a user, I can add items to a shopping cart.
5. as a user, I can remove items from a shopping cart.
6. as a user, I can purchase items in my cart.

## References Used

(___TODO__: List any tutorials or material referenced that you've based your code off of_)

## Authors
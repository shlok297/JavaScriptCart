## Overview

Cognizant has been engaged to help build a site for Ali Snobba - a snobby online store where customers purchase high-end merchandise like Louis Vuitton handbags and Rolex watches.

We need to model a Shopping Cart that stores items while customers are going through the checkout process.  This basic cart will work like all basic carts you’ve ever used whilst shopping online.

## Stories

* As a customer, if I haven’t put anything into my cart, the cart is empty. 
* As a customer, I can add a product to the cart, and the cart will display a quantity of 1 of that product, in that line item.
* As a customer, I can increase the quantity of a line item by 1.
* As a customer, I can decrease the quantity of a line item by 1. If I decrease it to 0, the line item disappears.
* As a customer, I can see the discounted price of each line item in my cart (product price X quantity of that product).
* As a customer, I can see the un-discounted price of each line item in my cart, so I can see how much I’m saving.
* As a customer, I can see the total, discounted price of all line items in my cart.
* As a customer, I can see the total, un-discounted price of all line items in my cart.

## Your task

* Fork this repo.
* Set up your project.
* Make model classes, accordingly, for Cart, LineItem, and Product, that meet the requirements, and thoroughly unit-test them.
* Push up your repo.
* Make a pull request back to the upstream repo.

## Notes

Right now we only need to create the models, no UI. 

We are also NOT creating a complete running service in this exercise -- really ONLY make the models.

ONLY implement what is specified above. If you aren’t sure whether something is in scope, ask your instructor!

## Technical requirements

* Use just plain old JavaScripts, no frameworks such as Angular, and no ORM libraries or databases.
* Demonstrate the use of JavaScript functional programming style.
* Write clean, modularized code.
* Make small, meaningful git commits 
* Make sure you have 100% test coverage with your unit tests!

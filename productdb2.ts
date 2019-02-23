/* We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

Create a map with the following key-value pairs.
Create an application which solves the following problems.
Which products cost less than 201? (just the name)
Which products cost more than 150? (name + price) */

'use strict';

let pdata2: any = {
  'Eggs' : 200,
  'Milk': 200,
  'Fish': 400,
  'Apples' : 150,
  'Bread' : 50,
  'Chicken' : 550,
 }
 
//pontosabban ez lett a függvény lényege
for (let [food, price] of Object.entries(pdata2)) {
  if(price < 202) {
    console.log(food);
  }
  if (price > 150) {
    console.log(food, price);
  }
}

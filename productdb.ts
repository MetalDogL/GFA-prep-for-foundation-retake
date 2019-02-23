'use strict';

import { POINT_CONVERSION_COMPRESSED } from "constants";

let productList = {
  'eggs': 200,
  'milk': 200,
  'fish': 400,
  'apples': 150,
  'bread': 50,
  'chicken': 550
}

let products = Object.keys(productList);    //saving keys and values into variables
let prices = Object.values(productList);

console.log(productList['fish']);           //showing price of Fish

function mostExpensive() {                  //shows the most expensive item in list
  prices.sort(function(a, b) {
    return a-b;
  });
  return prices[prices.length -1];          //must be length -1, otherwise it returns UNDEFINED
}

console.log(products[prices.indexOf(mostExpensive())]);

let sum: number = prices.reduce(function(accu, current) {   //finding average price
  accu += current;
  return accu;
});

console.log(sum / products.length);


let cheapItems: number = 0;                 //finding items cheaper than 300
for (let i = 0; i < prices.length; i++) {
  if (prices[i] < 300) {
    cheapItems++;
  }  
}

console.log(cheapItems);


function priceOf125() {                    //finding out if any item has price of 125
  let answer: string = 'No';
  prices.forEach(element => {
    if (element === 125) {
      answer = 'Yes';
    }
  });
  console.log(answer);
}

priceOf125();


/* function theCheapestItem() {                  //shows the cheapest item in list      FIND SOLUTION!!
  prices.sort(function(b, a) {
    return b-a;
  });
  return prices[prices.length];
}

console.log(products[prices.indexOf(theCheapestItem())]); */
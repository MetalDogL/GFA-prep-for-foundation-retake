/* Create an application which solves the following problems.

How much does Bob pay?
How much does Alice pay?
Who buys more Rice?
Who buys more Potato?
Who buys more different products?
Who buys more products? (piece) */

'use strict';

let productPrices: any = {
  milk: 1.07,
  rice: 1.59,
  eggs: 3.14,
  cheese: 12.60,
  chickenBreasts: 9.40,
  apples: 2.31,
  tomato: 2.58,
  potato: 1.75,
  onion: 1.10
}

let foodItem = Object.keys(productPrices);    //saving keys and values into variables
let foodPrice = Object.values(productPrices);

let bobList: any = {
  milk: 3,
  rice: 2,
  eggs: 2,
  cheese: 1,
  chickenBreasts: 4,
  apples: 1,
  tomato: 2,
  potato: 1
}

let aliceList: any = {
  rice: 1,
  eggs: 5,
  chickenBreasts: 2,
  apples: 1,
  tomato: 10,
  potato: 2
}

//how much does Bob pay
let sum = 0;
for (let product in productPrices) {
  for (let quantity in bobList) {
    if (product === quantity) {
      sum += productPrices[product] * bobList[quantity];
    }
  }
}

console.log('Bob pays ' + Math.round(sum));

//how much does Alice pay
let sum1 = 0;
for (let product in productPrices) {
  for (let quantity in aliceList) {
    if (product === quantity) {
      sum1 += productPrices[product] * aliceList[quantity];
    }
  }
}

console.log('Alice pays ' + Math.round(sum1));

//who buys more rice

if (bobList['Rice'] > aliceList['Rice']) {
  console.log('Bob buys more rice')
} else if (aliceList['Rice'] > bobList['Rice']) {
  console.log('Alice buys more rice')
} else {
  console.log("They buy the same amount of rice");
}

//who buys more potato
if (bobList['Potato'] === undefined) {
  bobList['Potato'] = 0;
}
if (aliceList['Potato'] === undefined) {
  aliceList['Potato'] = 0
}

if (bobList['Potato'] > aliceList['Potato']) {
  console.log('Bob buys more potato')
} else if (aliceList['Potato'] > bobList['Potato']) {
  console.log('Alice buys more potato')
} else {
  console.log("They buy the same amount of potato");
}

//who buys more different products
let productCounterBob = 0;
let productCounterAlice = 0;
for (let product in bobList) {
  productCounterBob++
}
for(let product in aliceList) {
  productCounterAlice++
}

if (productCounterAlice > productCounterBob) {
  console.log('Alice buys more different product');
} else if (productCounterBob > productCounterAlice) {
  console.log('Bob buys more different product');
} else {
  console.log('They buy the same amount of product');
}

//who buys more piece of products
let itemCounterBob = 0;
let itemCounterAlice = 0;

for ( let product in bobList) {
  itemCounterBob += bobList[product]
}


for ( let product in aliceList) {
  itemCounterAlice += aliceList[product]
}

if (itemCounterAlice > itemCounterBob) {
  console.log('Alice buys more different item');
} else if (itemCounterBob > itemCounterAlice) {
  console.log('Bob buys more different product');
} else {
  console.log('They buy the same amount of items');
}
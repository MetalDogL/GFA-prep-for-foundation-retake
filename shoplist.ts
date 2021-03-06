/* We are going to represent a shopping list in a list containing strings.

Create a list with the following items.
Eggs, milk, fish, apples, bread and chicken
Create an application which solves the following problems.
Do we have milk on the list?
Do we have bananas on the list? */

'use strict';

//method1 of doing this with OBJECT using HASOWNPROPERTY()

let shopList = {
	eggs: 0,
	milk: 0,
	fish: 0,
	apples: 0,
	bread: 0,
	chicken: 0
};

function stockStatus(): any {

	let items = Object.keys(shopList);
  
  console.log(shopList.hasOwnProperty('milk'));
	console.log(shopList.hasOwnProperty('bananas'));
}

stockStatus();


//method2 of doing this with ARRAY using INCLUDES()

/* let shopList: string[] = [ 'eggs', 'milk', 'fish', 'apples', 'bread', 'chicken' ];

function stockStatus(params: string[]) {
	if (shopList.includes('milk')) {
		console.log('yes');
	} else {
		console.log('no');
	}
	if (shopList.includes('bananas')) {
		console.log('yes');
	} else {
		console.log('no');
	}
}

stockStatus(shopList); */

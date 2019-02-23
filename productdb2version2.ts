/* Create an application which solves the following problems.
Which products cost less than 201? (just the name)
Which products cost more than 150? (name + price) */

'use strict';
//export { };

let myMap: any = {
	Eggs: 200,
	Milk: 200,
	Fish: 400,
	Apples: 150,
	Bread: 50,
	Chicken: 550
};

let belowPrice2: number = 201;
function AnotherBelowOne(o: object) {
	let prices: number[] = [];
	let nameOfTheItems: string[] = [];

	for (let index = 0; index < Object.keys(o).length; index++) {
		if (Object.values(o)[index] <= belowPrice2) {
			prices.push(Object.values(o)[index]);
		} else {
		}
	}
	for (let index = 0; index < Object.keys(o).length; index++) {
		if (prices[index] === Object.values(o)[index]) {
			nameOfTheItems.push(Object.keys(o)[index]);
		} else {
		}
	}
	return nameOfTheItems;
}
function WhichIsMoreThan(o: object, n: number) {
	let moreYhanArray: any[] = [];
	for (let index = 0; index < Object.keys(o).length; index++) {
		if (Object.values(o)[index] > n) {
			moreYhanArray.push(Object.keys(o)[index], Object.values(o)[index]);
		} else {
		}
	}
	return moreYhanArray;
}
console.log(WhichIsMoreThan(myMap, 199));

/* We are going to represent our expenses in a list containing integers.

Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings? */

'use strict';
export {};

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

function analyze(params: number[]) {
  console.log(params.reduce(function(accu: number, current: number) {     //shows how much was spent in total
  return accu += current}));

  let sum: number = expenses.reduce(function(accu, current) {   //finding average expense
    accu += current;
    return accu;
  });
  
  console.log(sum / expenses.length);

  let max: number = 0;                  //showing greatest expense
  params.forEach(element => {
    if (max < element) {
      max = element;
    }
  });
  console.log(max);

  let min: number = expenses[0];        //showing cheapest expense
  params.forEach(element => {
    if (min > element) {
      min = element;
    }
  });
  console.log(min);
    
}

analyze(expenses);
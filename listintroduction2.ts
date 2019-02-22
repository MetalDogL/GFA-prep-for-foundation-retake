'use strict';

let ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

let ListB: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

//console.log(ListA.includes('Durian')); //this method does not work on string[]!!! Won't print out if Durian is included or not


console.log(ListA.indexOf('Durian') > -1); //prints out whether List A contains Durian or not

ListB.splice(3, 1);   //removes Durian from List B

console.log(ListB);

ListA.splice(3, 0, 'Kiwifruit');

console.log(ListA);

console.log('This is list A:' + ListA);
console.log('This is list B:' + ListB);

if (ListA.length > ListB.length) {                //comparing the length of two string arrays
  console.log('List A has more elements than List B');
} else {
  console.log('List B has more elements than List A');
}

console.log(ListA.indexOf('Avocado'));   //finding out the index of Avocado in ListA
console.log(ListB.indexOf('Durian'));    //finding out the index of Durian in ListB

ListB.push('Passion Fruit', 'Pomelo');    //adding passion fruit and pomelo to ListB in single statement
console.log(ListB);

console.log(ListA[2]);                    //printing out 3rd element from listA




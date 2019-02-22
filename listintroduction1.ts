'use strict';

let nameList: string[] = [];    //create empty array of strings
 
console.log(nameList.length); //Print out the number of elements in the list
nameList.push('William');

if (nameList.length === 0) {      //print out whether the list is empty or not
  console.log('list is empty');
} else {
  console.log('there is something in the list');
} 

nameList.push('John', 'Amanda');
 
console.log(nameList.length);     //printing out list length

console.log(nameList[2]);         //printing out the 3rd element

for (let i: number = 0; i < nameList.length; i++) {   //iterate through the list and print out each name
  console.log(nameList[i]);
}

for (let i: number = 0; i < nameList.length; i++) {   //printing out each name with bullet number
  console.log([i+1] + '. ' + nameList[i]);
}

nameList.splice(1, 1);            //remove second element from the list
console.log(nameList.reverse());  //reverse the elements and print them

nameList.slice().reverse().forEach(function(nameList) {  //Iterate through the list in a reversed order and print out each name
console.log(nameList);
});

nameList.splice(0, 3);    //remove all the array elements
console.log(nameList);


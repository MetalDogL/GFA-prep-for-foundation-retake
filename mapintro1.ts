/* We are going to play with maps. Feel free to use the built-in methods where possible.

Create an empty map where the keys are integers and the values are characters

Print out whether the map is empty or not

Print all the keys

Print all the values

Add value D with the key 68

Print how many key-value pairs are in the map

Print the value that is associated with key 99

Remove the key-value pair where with key 97

Print whether there is an associated value with key 100 or not

Remove all the key-value pairs */


'use strict';

var newMap: any = {
  97: 'a',
  98: 'b',
  99: 'c',
  65: 'A',
  66: 'B',
  67: 'C'
}


console.log(Object.keys(newMap)); //printing all the keys

const values = Object.keys(newMap).map(key => newMap[key]);   //a way how to print values, but they are in reversed order
const commaJoinedValues = values.join(",");
console.log(commaJoinedValues);

console.log(Object["values"](newMap));  //this prints all the VALUES, when ES7 is not supported
console.log(Object["entries"](newMap)); //this prints all the ENTRIES, when ES7 is not supported

newMap[68] = 'D';                   //pushing/adding new key and value to the map


let valueArray = Object["values"](newMap); //prints specific value of specific key (here of key 99)
//console.log(valueArray[6]);

delete newMap[99];           //removing specific value pair from the array
console.log(newMap);


console.log(newMap.hasOwnProperty('100'));           //prints whether there is an associated value with key 100
// expected output: false (in this exercise)

for (let key in newMap) {       //deleting ALL properties from the map/object
  delete(newMap[key]);
}
console.log(newMap);









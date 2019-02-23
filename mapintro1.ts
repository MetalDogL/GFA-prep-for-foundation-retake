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









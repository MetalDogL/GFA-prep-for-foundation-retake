/* Create a map where the keys are strings and the values are strings with the following initial values

Print all the key-value pairs in the following format

Remove the key-value pair with value The Lab

Add the following key-value pairs to the map

Key	Value
978-1-60309-450-4	They Called Us Enemy
978-1-60309-453-5	Why Did We Trust Him?
Print whether there is an associated value with key 478-0-61159-424-8 or not

Print the value associated with key 978-1-60309-453-5 */


'use strict';

let phoneList: any  = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab'
};


let keys = Object.keys(phoneList);                    //saving KEYS and VALUES into variables
let values2 = Object.values(phoneList);

keys.forEach(function(longNumber, textForPrint) {           //printing out desired text
console.log(`${values2[textForPrint]} (ISBN: ${longNumber})`);
});

delete phoneList['978-1-60309-444-3'];    //deleting through a given key
delete phoneList['978-1-60309-461-0'];    //here I deleted The Lab

//delete phoneList[values2['The Lab']];    // find solution for deleting via VALUE!!!!!!!!!!!!!!!!!!!!!!!! 

phoneList['978-1-60309-450-4'] = 'They Called Us Enemy';    //adding new entries to phonelist
phoneList['978-1-60309-453-5'] = 'Why Did We Trust Him?';

console.log(phoneList.hasOwnProperty('478-0-61159-424-8'));           //prints whether there is an associated value with key 478-0-61159-424-8
// expected output: false (in this exercise)

console.log(phoneList['978-1-60309-453-5']);    //Print the value associated with key 978-1-60309-453-5



console.log(phoneList); 
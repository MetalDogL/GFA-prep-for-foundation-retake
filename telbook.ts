/* We are going to represent our contacts in a map where the keys are going to be strings and the values are going to be strings as well.

Create an application which solves the following problems.
What is John K. Miller's phone number?
Whose phone number is 307-687-2982?
Do we know Chris E. Myers' phone number? */

'use strict';

let phoneBook = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982'
}

function showInfo () {

let names = Object.keys(phoneBook);                    //saving KEYS and VALUES into variables
let phoneNumbers = Object.values(phoneBook);

console.log(phoneBook['John K. Miller']);     //finding out JKM's phone number
console.log(names[phoneNumbers.indexOf('307-687-2982')]);  //finding out whose number this is = SHOWS THE KEY OF THE VALUE
console.log(phoneBook.hasOwnProperty('Chris E. Myers')); //finding out if we know Chris's phone number
}

showInfo();
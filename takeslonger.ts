'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"


//METHOD 1
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

let a: string = quote.replace("It you expect", "It always takes longer than you expect" );

console.log(a);




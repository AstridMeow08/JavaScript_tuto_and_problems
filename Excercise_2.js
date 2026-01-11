// 2A Create the text 'My Name is: ,as a string

let myNameString = 'My Name is: ';

// 2B Create your name as a Sting

let myName = 'logesh';

// 2C Concatenate the two strings

let fullString = myNameString + myName;
console.log(fullString);

// 2D At a restaurant, you order 1 coffee ($5) and 1 bagel ($3). using math calculate the total cost and using concatenation 
// create the text Total Cost: $ 

let coffeePrice = 5;
let bagelPrice = 3;

let totalCost = coffeePrice + bagelPrice;

console.log('Total Cost: $' + totalCost);

// 2E do the same as 2D but use template string and interpolation

console.log(`Total Cost: $${totalCost}`);

// 2F Display the text from 2E in a popup alert

alert('Total Cosrt: $' + totalCost);

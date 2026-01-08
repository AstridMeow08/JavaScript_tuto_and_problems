// Numbers and Math Exercises

// 1A At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, 1 icecream for $5. Use javascript
// to calculate the cost of the  order

let soupPrice = 10;
let burgerPrice = 8;
let icecreamPrice = 5;

let totalCost = soupPrice + (3*burgerPrice) + icecreamPrice;
console.log("Totao cost of the order is: $ "+totalCost);

// 1B You're at the restaurant with 2 friends (3people in total) and make the same order as above. Calculate how much each person has to pay.

let numberOfPeople = 3;
let costPerPerson = totalCost / numberOfPeople;
console.log("Each person has to pay: $ "+costPerPerson);

// 1C Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each) 

let toasterPrice = 18.50;
let shirtPrice = 7.50;

let totalShoppingCost = toasterPrice + (2 * shirtPrice);
console.log("Total Shopping Cost: $ "+totalShoppingCost);

// 1D Calculate a 10% tax for the total in 1C

let taxRate = 0.10;

let taxAmount = totalShoppingCost * taxRate;
console.log("Tax Amount is : $ "+taxAmount);

// 1E Calculate a 20% tax for the total in 1C

let taxrate2 = 0.20;
let taxAmount2 = totalShoppingCost * taxrate2;
console.log("Tax Amount 2 is : $ "+taxAmount2)

// 1F Calculate the cost of the products(before shipping and taxes). Hint: calculate in cents to avoid float precision issues.

let basketballPriceCents = 5999; // $59.99
let soccerBallPriceCents = 3499; // $34.99
let shippingCostCents = 499; // $4.99
let estimateTaxCents = 0.10; // 10%

let costBeforeTaxAndShipping = basketballPriceCents + (2 * soccerBallPriceCents);
console.log("Cost before tax and shipping : $ " + (costBeforeTaxAndShipping / 100));

// 1G Calculate the total Before Tax 

let totalBeforeTax = costBeforeTaxAndShipping + shippingCostCents;
console.log("Toatal Before Tax : $ " + (totalBeforeTax / 100));

// 1H Calculate the total with 10% tax

let taxAmountCents = totalBeforeTax * estimateTaxCents;
console.log("Tax Amount: $ :"+(Math.round(taxAmountCents) / 100));


// 1I Calculate the Order total 

let orderTotalCents = totalBeforeTax + Math.round(taxAmountCents);
console.log("Order Total : $ " + (orderTotalCents / 100));

// 1J Math.floor (2.8 => 2)

let originalPrice = 2.8;
let roundedDownPrice = Math.floor(originalPrice);

console.log("Rounded Down Price: $ "+roundedDownPrice);

// 1K Math.ceil (2.2 => 3)\

let originalPrice1 = 2.2;
let roundedUpPrice = Math.ceil(originalPrice1);

console.log("Rounded Up Price : $ "+roundedUpPrice);


// 1L,1M,1N Teperature Converter


let c1 = 25;
let f1 = 86;
let c2 = -5;

let c2f = (c1 * 9/5) + 32;
console.log(c1+"°C is "+c2f+"°F");

letf2c = (f1 - 32) * 5/9;
console.log(f1+"°F is "+letf2c+"°C");

letc2f2 = (c2 * 9/5) + 32;
console.log(c2+"°C is "+letc2f2+"°F");

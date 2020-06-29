const useFaker = require("faker");

function product (numProd) {
    for (let i = 0; i<numProd; i++) {
        console.log(i+1 + ". " + useFaker.commerce.productName() + " - R" + useFaker.commerce.price());
    };
}

console.log("=====================");
console.log(" WELCOME TO MY SHOP!");
console.log("=====================");
product(10);
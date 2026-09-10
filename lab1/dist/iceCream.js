"use strict";
const smallPrice = 10;
const largePrice = 25;
const chocolatePrice = 5;
const caramelPrice = 6;
const berriesPrice = 10;
const marshmallowPrice = 5;
const size = prompt("Choose ice cream size: small or large");
let totalPrice = 0;
if (size === "small") {
    totalPrice += smallPrice;
}
else if (size === "large") {
    totalPrice += largePrice;
}
const toppingsInput = prompt("Choose toppings separated by comma: chocolate, caramel, berries");
if (toppingsInput !== null) {
    const toppings = toppingsInput
        .split(",")
        .map((topping) => topping.trim().toLowerCase());
    if (toppings.includes("chocolate")) {
        totalPrice += chocolatePrice;
    }
    if (toppings.includes("caramel")) {
        totalPrice += caramelPrice;
    }
    if (toppings.includes("berries")) {
        totalPrice += berriesPrice;
    }
}
const marshmallow = prompt("Add marshmallow? yes/no");
if (marshmallow?.toLowerCase() === "yes") {
    totalPrice += marshmallowPrice;
}
alert(`Total price: ${totalPrice} UAH`);

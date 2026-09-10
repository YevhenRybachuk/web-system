const smallPrice: number = 10;
const largePrice: number = 25;

const chocolatePrice: number = 5;
const caramelPrice: number = 6;
const berriesPrice: number = 10;
const marshmallowPrice: number = 5;

const size: string | null = prompt(
    "Choose ice cream size: small or large"
);

let totalPrice: number = 0;

if (size === "small") {
    totalPrice += smallPrice;
} else if (size === "large") {
    totalPrice += largePrice;
}

const toppingsInput: string | null = prompt(
    "Choose toppings separated by comma: chocolate, caramel, berries"
);

if (toppingsInput !== null) {
    const toppings: string[] = toppingsInput
        .split(",")
        .map((topping: string) => topping.trim().toLowerCase());

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

const marshmallow: string | null = prompt(
    "Add marshmallow? yes/no"
);

if (marshmallow?.toLowerCase() === "yes") {
    totalPrice += marshmallowPrice;
}

alert(`Total price: ${totalPrice} UAH`);
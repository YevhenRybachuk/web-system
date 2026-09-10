"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    scale(factor) {
        this.radius *= factor;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
}
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getArea() {
        const semiPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(semiPerimeter *
            (semiPerimeter - this.sideA) *
            (semiPerimeter - this.sideB) *
            (semiPerimeter - this.sideC));
    }
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    scale(factor) {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    }
}
const shapes = [
    new Circle(5),
    new Rectangle(10, 5),
    new Triangle(3, 4, 5)
];
let totalArea = 0;
let totalPerimeter = 0;
for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}
console.log("Total area:", totalArea);
console.log("Total perimeter:", totalPerimeter);
shapes[0].scale(2);
console.log("Circle after scaling:");
console.log("Area:", shapes[0].getArea());
console.log("Perimeter:", shapes[0].getPerimeter());

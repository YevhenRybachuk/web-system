"use strict";
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} walks.`);
    }
    makeSound() {
        console.log(`${this.name} says: Meow!`);
    }
}
class Bird {
    constructor(name, age) {
        this.fly = true;
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} flies.`);
    }
    makeSound() {
        console.log(`${this.name} says: Tweet!`);
    }
}
class Fish {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} swims.`);
    }
    makeSound() {
        console.log(`${this.name}`);
    }
}
const cat = new Cat("Cat", 3);
const bird = new Bird("Bird", 2);
const fish = new Fish("Fish", 1);
cat.move();
cat.makeSound();
bird.move();
bird.makeSound();
fish.move();
fish.makeSound();

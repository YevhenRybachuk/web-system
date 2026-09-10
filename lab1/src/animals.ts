interface Animal {
    name: string;
    age: number;
    move(): void;
    makeSound(): void;
    fly?: boolean;
}

class Cat implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} walks.`);
    }

    makeSound(): void {
        console.log(`${this.name} says: Meow!`);
    }
}

class Bird implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} flies.`);
    }

    makeSound(): void {
        console.log(`${this.name} says: Tweet!`);
    }

    fly = true;
}

class Fish implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} swims.`);
    }

    makeSound(): void {
        console.log(`${this.name}`);
    }
}

const cat: Animal = new Cat("Cat", 3);
const bird: Animal = new Bird("Bird", 2);
const fish: Animal = new Fish("Fish", 1);

cat.move();
cat.makeSound();

bird.move();
bird.makeSound();

fish.move();
fish.makeSound();
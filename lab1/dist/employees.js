"use strict";
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Developer extends Employee {
    getAnnualBonus() {
        return this.salary * 0.10;
    }
    pay() {
        console.log(`${this.name} receives salary of ${this.salary} UAH.`);
    }
}
class Manager extends Employee {
    getAnnualBonus() {
        return this.salary * 0.20;
    }
    pay() {
        console.log(`${this.name} receives salary of ${this.salary} UAH.`);
    }
}
const employees = [
    new Developer("Maks", 25, 30000),
    new Developer("Denis", 30, 40000),
    new Manager("Taras", 35, 50000),
    new Manager("Dima", 40, 60000)
];
let totalBonus = 0;
for (const employee of employees) {
    const bonus = employee.getAnnualBonus();
    console.log(`${employee.name}: annual bonus = ${bonus} UAH`);
    totalBonus += bonus;
}
console.log(`Total annual bonuses: ${totalBonus} UAH`);
const payableEmployees = [
    new Developer("Maks", 25, 30000),
    new Manager("Taras", 35, 50000)
];
for (const employee of payableEmployees) {
    employee.pay();
}

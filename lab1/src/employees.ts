abstract class Employee {
    constructor(
        public name: string,
        public age: number,
        public salary: number
    ) {}

    abstract getAnnualBonus(): number;
}

interface Payable {
    pay(): void;
}

class Developer extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.10;
    }

    pay(): void {
        console.log(
            `${this.name} receives salary of ${this.salary} UAH.`
        );
    }
}

class Manager extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.20;
    }

    pay(): void {
        console.log(
            `${this.name} receives salary of ${this.salary} UAH.`
        );
    }
}

const employees: Employee[] = [
    new Developer("Maks", 25, 30000),
    new Developer("Denis", 30, 40000),
    new Manager("Taras", 35, 50000),
    new Manager("Dima", 40, 60000)
];

let totalBonus: number = 0;

for (const employee of employees) {
    const bonus: number = employee.getAnnualBonus();

    console.log(
        `${employee.name}: annual bonus = ${bonus} UAH`
    );

    totalBonus += bonus;
}

console.log(`Total annual bonuses: ${totalBonus} UAH`);

const payableEmployees: Payable[] = [
    new Developer("Maks", 25, 30000),
    new Manager("Taras", 35, 50000)
];

for (const employee of payableEmployees) {
    employee.pay();
}
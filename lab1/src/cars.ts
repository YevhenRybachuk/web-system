abstract class Car {
    public model: string;
    protected year: number;
    private engineNumber: string;

    constructor(
        model: string,
        year: number,
        engineNumber: string
    ) {
        this.model = model;
        this.year = year;
        this.engineNumber = engineNumber;
    }

    abstract showInfo(): void;

    protected getEngineNumber(): string {
        return this.engineNumber;
    }
}

class BMW extends Car {
    public color: string;
    private horsepower: number;

    constructor(
        model: string,
        year: number,
        engineNumber: string,
        color: string,
        horsepower: number
    ) {
        super(model, year, engineNumber);

        this.color = color;
        this.horsepower = horsepower;
    }

    showInfo(): void {
        console.log("BMW");
        console.log("Model:", this.model);
        console.log("Year:", this.year);
        console.log("Engine number:", this.getEngineNumber());
        console.log("Color:", this.color);
        console.log("Horsepower:", this.horsepower);
        console.log("--------------------");
    }
}

class Toyota extends Car {
    public color: string;
    private fuelType: string;

    constructor(
        model: string,
        year: number,
        engineNumber: string,
        color: string,
        fuelType: string
    ) {
        super(model, year, engineNumber);

        this.color = color;
        this.fuelType = fuelType;
    }

    showInfo(): void {
        console.log("Toyota");
        console.log("Model:", this.model);
        console.log("Year:", this.year);
        console.log("Engine number:", this.getEngineNumber());
        console.log("Color:", this.color);
        console.log("Fuel type:", this.fuelType);
        console.log("--------------------");
    }
}

class Audi extends Car {
    public color: string;
    private transmission: string;

    constructor(
        model: string,
        year: number,
        engineNumber: string,
        color: string,
        transmission: string
    ) {
        super(model, year, engineNumber);

        this.color = color;
        this.transmission = transmission;
    }

    showInfo(): void {
        console.log("Audi");
        console.log("Model:", this.model);
        console.log("Year:", this.year);
        console.log("Engine number:", this.getEngineNumber());
        console.log("Color:", this.color);
        console.log("Transmission:", this.transmission);
        console.log("--------------------");
    }
}

const cars: Car[] = [
    new BMW("M3", 2022, "BMW001", "Black", 510),
    new BMW("X5", 2023, "BMW002", "White", 340),

    new Toyota("Camry", 2021, "TOY001", "Silver", "Petrol"),
    new Toyota("Corolla", 2022, "TOY002", "Blue", "Hybrid"),

    new Audi("A4", 2020, "AUD001", "Black", "Automatic"),
    new Audi("Q7", 2023, "AUD002", "Gray", "Automatic")
];

for (const car of cars) {
    car.showInfo();
}
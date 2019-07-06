// creating a class
class Person {
    public name: string;
    private type: string | null = null;
    protected age:  number;

    // notice username here refers to creating a property username: string in the class above and
    // assigning it in the constructor like this.username = username; it is a shorthand form
    constructor(name: string, public username: string) {
        this.age = 31;
        this.name = name;
    }

    public printAge() {
        console.log(this.age);
    }

    public setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

}

const person = new Person("Max", "max");
console.log(person);
console.log(person.name, person.username);
person.printAge();
person.setType("male");


// Inheritance
class Teacher extends Person {
    public height = "1m78";

    constructor(username: string, public hobby: string) {
        super("Test", username);
        this.age = 32;
    }
}

const teacher = new Teacher("wello", "football");
console.log(teacher);

// Setters and Getters
class Plant {
    private _species: string = "Default";

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        }
    }

    get species(): string {
        return this._species;
    }

}

let plant = new Plant();
console.log(plant.species); // return Default
plant.species = "AB"; // too short
console.log(plant.species); // return Default
plant.species = "GREEN"; // too short
console.log(plant.species); // return GREEN

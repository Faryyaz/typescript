// creating a class
class People {
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

const people = new People("Max", "max");
console.log(people);
console.log(people.name, people.username);
people.printAge();
people.setType("male");


// Inheritance
class Teacher extends People {
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
plant.species = "GREEN"; // its good
console.log(plant.species); // return GREEN


// static properties & method
class Helpers {
    public static PI: number = 3.14;
    
    public static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }

}

console.log(2 * Helpers.PI); //6.28
console.log(Helpers.calcCircumference(7)); //21.98

//Abstract class
abstract class Project {
    public projectName: string = "Default";
    public budget: number = 1000;

    abstract changeName(name: string): void;

    public calcBudget(): number {
        return this.budget * 2;
    }

}

class ITproject extends Project {

    public changeName(name: string): void {
        this.projectName = name;
    }
}

let project = new ITproject();
console.log(project);
project.changeName("Typescript");
console.log(project);


// private constructor singleton patern
class Single {
    private static instance: Single | null = null;

    private constructor(public readonly name: string){}

    public static getInstance(): Single {
        if(!this.instance) {
            this.instance = new Single("Welcome to Singleton");
        }
        return this.instance;
    }
}

let single = Single.getInstance();
console.log(single);
console.log(single.name); // return Welcome to Singleton
// single.name = "test"; //cant change name because it is readonly refer to constructor
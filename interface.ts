interface Individual {
    name: string;
}

export function sayGreetings(individual: Individual) {
    console.log("Hello " + individual.name);
}

export function changeName(individual: Individual) {
    individual.name = "Tommy";
}


//optional properties
interface Personality {
    name: string;
    age?: number; // age is optional

    // this is a unknown property that we can declare later, 
    //we dont know the type either thats why it is any, this is not an array!
    // kind of dynamic property
    [property: string]: any; 


    // functions
    improvePersonality(firstName: string): void;
}

export function testPersonality(personality: Personality) {
    console.log(personality.name);
}

// class implementating an interface
export class Animal implements Personality {
    name: string = "Ponpon";

    improvePersonality(firstName: string): void {
        console.log("Hello am a dog! and my name is " + this.name + firstName);
    }
}


// function types - interface for functions
interface doSum {
    (num1: number, num2: number): number;
}

export let myCalcSum: doSum;
myCalcSum = function(val1, val2) {
    return val1 + val2;
}

// interface inheritance

interface AnotherPersonality extends Personality {
    age: number; // overwrite , its no longer optional
}
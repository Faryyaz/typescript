import calc from './math/square';
import * as Triangle from './math/triangle';
import { sayGreetings, changeName, testPersonality } from './interface';

console.log(calc(10, 20));
console.log(Triangle.factor);
console.log(Triangle.calcTriangle(4));


let individual = {
    name: "Jenny",
    age: 29
}

sayGreetings(individual);
changeName(individual);
sayGreetings(individual);



let newPersonality = {
    name: "Lady",
    // we dont define age because it is optional
    test: 10,

    improvePersonality(firstName: string) {
        console.log("Hi I am improved and my name is " + firstName);
    }
}

testPersonality(newPersonality);
newPersonality.improvePersonality("Bart");
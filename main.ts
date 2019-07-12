import calc from './math/square';
import * as Triangle from './math/triangle';
import { sayGreetings, changeName } from './interface';

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

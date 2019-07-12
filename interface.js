"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayGreetings(individual) {
    console.log("Hello " + individual.name);
}
exports.sayGreetings = sayGreetings;
function changeName(individual) {
    individual.name = "Tommy";
}
exports.changeName = changeName;
function testPersonality(personality) {
    console.log(personality.name);
}
exports.testPersonality = testPersonality;

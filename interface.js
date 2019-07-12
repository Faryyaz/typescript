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
// class implementating an interface
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "Ponpon";
    }
    Animal.prototype.improvePersonality = function (firstName) {
        console.log("Hello am a dog! and my name is " + this.name + firstName);
    };
    return Animal;
}());
exports.Animal = Animal;

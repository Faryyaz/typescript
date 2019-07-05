"use strict";
//let is blocked scoped
var age = 6;
function showAge() {
    // console.log(age); // undefined
    var age = 7;
    console.log(age);
}
//const
var gravity = 10;
// gravity = 11; // its a constant cannot be overwritten
// arrow functions
var multiplier = function (value1, value2) {
    return value1 * value2;
};
console.log(multiplier(2, 7));
var greet = function (message) {
    return message;
};
// default parameters
var counter = function (number) {
    if (number === void 0) { number = 20; }
    while (number > 0) {
        number--;
    }
    return number;
};
console.log(counter); // return 0
// REST & SPREAD
var numbers = [10, 20, 7, 5];
console.log(Math.max.apply(Math, numbers)); // spread when in function call (notice ...)
var makeArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
console.log(makeArray(2, 3, 4)); // returns an array ->[2,3,4]
//Destructuring
// arrays
var hobbies = ["sleeping", "dreaming"];
var hb1 = hobbies[0], hb2 = hobbies[1];
console.log(hb1, hb2);
//objects
var userInfo = { name: "Sam", age: 35 };
var name = userInfo.name, age = userInfo.age;
console.log(name, age);

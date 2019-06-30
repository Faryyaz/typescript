"use strict";
// Types
// string
var fName = "Tommy";
//number
var mAge = 60;
//boolean
var married = true;
//array
var food = ["peach", "lemon"];
var address = [7, "street"];
//tuples
var stuff = ["things", 7];
//enum
var color;
(function (color) {
    color[color["green"] = 0] = "green";
    color[color["blue"] = 1] = "blue";
    color[color["red"] = 100] = "red";
    color[color["yellow"] = 101] = "yellow"; // Automatically becomes 101, it increments the last number
})(color || (color = {}));
var myColor = color.blue;
console.log(myColor); // returns 1
var myColor2 = color.yellow;
console.log(myColor2); // returns 101
var test;
(function (test) {
    test["hey"] = "hello";
    test["phrase"] = "world";
})(test || (test = {}));
console.log(test.hey); // hello
console.log(test.phrase); // world
// any
var car = "BMW";
car = { brand: "BMW", color: "White" };
//function
function printName() {
    return fName;
}
console.log(printName); // Tommy
//void
function sayHello() {
    console.log("Hello"); // Hello
}
//params types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(2, 7)); // returns 14
//function types
var myMultiply;
// myMultiply = sayHello; // this wont work because we declared myMultiply with a function type
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2)); // returns 10
//objects
var userData = {
    name: "Max",
    age: 27
};
//complex object
var complex = {
    data: [10, 20, 30],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [10, 20, 30],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealAge = 27;
myRealAge = "27";
// myRealAge = true; // type error
//check types
var finalVal = "test";
if (typeof finalVal == "number") {
    console.log("It is a number");
}
else {
    console.log("it is not a number");
}
// never type
function neverReturns() {
    throw new Error("Error!"); // never return a value
}
// null types
var cannotBeNull = 12;
// cannotBeNull = null; // gives an error because it was define as a number and cannot be of type null
var canAlsoBeNull;
canAlsoBeNull = null; // no error here
var canBeNull = 23;
canBeNull = null; // no errors here because we declared the types above
var canThisBeAny = null;
canThisBeAny = 12;

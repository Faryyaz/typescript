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
console.log(multiply(2, 7));

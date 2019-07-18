"use strict";
//Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Max").length); // 3
console.log(echo(27).length); // undefined, the problem here length is not applicable to the type number
console.log(echo({ name: "test", age: 20 }));
//Better Generic
// when specifying type T, it takes into consideration the type of data being passed as param
// so the ide gives better suggesting when typing . after the function call
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length); // 3
// console.log(betterEcho(27).length); // length does not exist on type 27
console.log(betterEcho(27)); // you can specify the type, here of type number
console.log(betterEcho({ name: "test", age: 20 })); // of type object
// built-in generics
var testResult = [2, 1.99];
testResult.push(29);
// testResult.push("stasd"); // ide is complaining, cant push string to type number right?
console.log(testResult);
// generic type arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Test", "Glksd"]);
// Generic types use
var echo2 = betterEcho;
console.log(echo2("something"));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calcul = function () {
        return this.value1 * this.value2;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.value1 = 10;
simpleMath.value2 = 2;
console.log(simpleMath.calcul());
// using multiple types
var SimpleCalculation = /** @class */ (function () {
    function SimpleCalculation() {
    }
    SimpleCalculation.prototype.init = function () {
        return +this.num1 * +this.num2;
    };
    return SimpleCalculation;
}());
var simpleCalculation = new SimpleCalculation();
simpleCalculation.num1 = 4;
simpleCalculation.num2 = "7";
console.log("My simple: " + simpleCalculation.init());
//exercise on generic
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printAll = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
// number
var myMap = new MyMap();
myMap.setItem("Apples", 7);
myMap.setItem("Orange", 5);
console.log(myMap.getItem("Orange")); //5
myMap.printAll();
myMap.clear();
myMap.printAll(); // null
// string
var myMap2 = new MyMap();
myMap2.setItem("Apples", "7");
myMap2.setItem("Orange", "5");
console.log(myMap2.getItem("Orange")); //5
myMap2.printAll();
myMap2.clear();
myMap2.printAll(); // null

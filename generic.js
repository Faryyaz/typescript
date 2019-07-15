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
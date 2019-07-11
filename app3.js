"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.142;
    function calcCircumference(diameter) {
        return PI * diameter;
    }
    MyMath.calcCircumference = calcCircumference;
    function calcArea(width, length) {
        if (width === void 0) { width = 10; }
        if (length === void 0) { length = 20; }
        return width * length;
    }
    MyMath.calcArea = calcArea;
})(MyMath || (MyMath = {}));
console.log(MyMath.calcArea());
console.log(MyMath.calcCircumference(4));
// console.log(MyMath.PI); // cant access it because it has not been exported

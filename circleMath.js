"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.142;
    function calcCircumference(diameter) {
        return PI * diameter;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));

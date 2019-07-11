"use strict";
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.142;
        function calcCircumference(diameter) {
            return PI * diameter;
        }
        Circle.calcCircumference = calcCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));

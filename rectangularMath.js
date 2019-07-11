"use strict";
var MyMath;
(function (MyMath) {
    function calcArea(width, length) {
        if (width === void 0) { width = 10; }
        if (length === void 0) { length = 20; }
        return width * length;
    }
    MyMath.calcArea = calcArea;
})(MyMath || (MyMath = {}));

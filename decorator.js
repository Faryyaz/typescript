"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var logged = function (constructorFn) {
    console.log(constructorFn);
};
var Login = /** @class */ (function () {
    function Login(name) {
        this.name = name;
    }
    Login = __decorate([
        logged
    ], Login);
    return Login;
}());
//Factory
var logging = function (value) {
    return value ? logged : null;
};
var Portal = /** @class */ (function () {
    function Portal() {
    }
    Portal = __decorate([
        logging(false) // cast logging
    ], Portal);
    return Portal;
}());
//advance
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Planting = /** @class */ (function () {
    function Planting() {
        this.name = "Green herb";
    }
    Planting = __decorate([
        printable
    ], Planting);
    return Planting;
}());
var planting = new Planting();
planting.print();
//Method decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
//property decorator
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
// parameter decorator
function printInfo(target, methodName, parameterIndex) {
    console.log("target: ", target);
    console.log("methodName: ", methodName);
    console.log("parameterIndex: ", parameterIndex);
}
var Renovation = /** @class */ (function () {
    function Renovation(name) {
        this.name = name;
    }
    Renovation.prototype.calcBudget = function () {
        console.log("20M");
    };
    Renovation.prototype.printBudget = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(4777);
        }
    };
    __decorate([
        overwritable(true)
    ], Renovation.prototype, "name", void 0);
    __decorate([
        editable(true)
    ], Renovation.prototype, "calcBudget", null);
    __decorate([
        __param(1, printInfo)
    ], Renovation.prototype, "printBudget", null);
    return Renovation;
}());
var renovation = new Renovation("Super renovation");
renovation.calcBudget();
renovation.calcBudget = function () {
    console.log("80M");
};
renovation.calcBudget();
console.log(renovation);
renovation.printBudget("any", true);

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
        logging(false)
    ], Portal);
    return Portal;
}());

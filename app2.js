"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// creating a class
var Person = /** @class */ (function () {
    // notice username here refers to creating a property username: string in the class above and
    // assigning it in the constructor like this.username = username; it is a shorthand form
    function Person(name, username) {
        this.username = username;
        this.type = null;
        this.age = 31;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Max", "max");
console.log(person);
console.log(person.name, person.username);
person.printAge();
person.setType("male");
// Inheritance
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(username, hobby) {
        var _this = _super.call(this, "Test", username) || this;
        _this.hobby = hobby;
        _this.height = "1m78";
        _this.age = 32;
        return _this;
    }
    return Teacher;
}(Person));
var teacher = new Teacher("wello", "football");
console.log(teacher);
// Setters and Getters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species); // return Default
plant.species = "AB"; // too short
console.log(plant.species); // return Default
plant.species = "GREEN"; // its good
console.log(plant.species); // return GREEN

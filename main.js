"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var square_1 = __importDefault(require("./math/square"));
var Triangle = __importStar(require("./math/triangle"));
var interface_1 = require("./interface");
console.log(square_1.default(10, 20));
console.log(Triangle.factor);
console.log(Triangle.calcTriangle(4));
var individual = {
    name: "Jenny",
    age: 29
};
interface_1.sayGreetings(individual);
interface_1.changeName(individual);
interface_1.sayGreetings(individual);

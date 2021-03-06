"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parallelogram_1 = require("./Parallelogram");
var Triangle_1 = require("./Triangle");
var parallelogram = new Parallelogram_1.Parallelogram(2, 4);
var triangle = new Triangle_1.Triangle(2, 2);
var square = new Parallelogram_1.Square(4);
console.log("area parallelogram: ", parallelogram.area());
console.log("perimeter parallelogram: ", parallelogram.perimeter());
console.log("area triangle: ", triangle.area());
console.log("perimeter triangle: ", triangle.perimeter());
console.log("area square: ", square.area());
console.log("perimeter square: ", square.perimeter());

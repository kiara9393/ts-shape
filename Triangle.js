"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_ts_math_1 = require("angular-ts-math");
var Triangle = /** @class */ (function () {
    function Triangle(base, heigh) {
        this.base = base;
        this.heigh = heigh;
    }
    Triangle.prototype.area = function () {
        return (this.base * this.heigh) / 2;
    };
    Triangle.prototype.perimeter = function () {
        /*
         let hypotenuse = (Math.sqrt(Math.pow(this.heigh,2)) + (Math.pow(this.heigh,4)/4)) // Math.sqrt (radice quadrata) //Math.pow (esponente)
         return hypotenuse * 2 +this.base
        */
        var hypotenuse = angular_ts_math_1.angularMath.squareOfNumber(angular_ts_math_1.angularMath.powerOfNumber(this.base / 2, 2) + angular_ts_math_1.angularMath.powerOfNumber(this.heigh, 2));
        return hypotenuse * 2 + this.base;
    };
    return Triangle;
}());
exports.Triangle = Triangle;

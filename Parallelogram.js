"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Parallelogram = /** @class */ (function () {
    function Parallelogram(base, heigh) {
        this.base = base;
        this.heigh = heigh;
    }
    Parallelogram.prototype.area = function () {
        return this.base * this.heigh;
    };
    Parallelogram.prototype.perimeter = function () {
        return (this.base + this.heigh) * 2;
    };
    return Parallelogram;
}());
exports.Parallelogram = Parallelogram;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this, side, side) // corrisponde a new Parallelogram
         || this;
        _this.side = side;
        return _this;
    }
    return Square;
}(Parallelogram));
exports.Square = Square;

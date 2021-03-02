"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CamelCasePipe = void 0;
var core_1 = require("@angular/core");
var CamelCasePipe = /** @class */ (function () {
    function CamelCasePipe() {
    }
    CamelCasePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var values = value.split(' ');
        var result = ' ';
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var v = values_1[_a];
            result += this.capitalize(v) + ' ';
        }
        return result;
    };
    CamelCasePipe.prototype.capitalize = function (value) {
        return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
    };
    CamelCasePipe = __decorate([
        core_1.Pipe({
            name: 'camelCase'
        })
    ], CamelCasePipe);
    return CamelCasePipe;
}());
exports.CamelCasePipe = CamelCasePipe;

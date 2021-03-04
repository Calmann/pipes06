"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExemplosPipesComponent = void 0;
var core_1 = require("@angular/core");
var ExemplosPipesComponent = /** @class */ (function () {
    function ExemplosPipesComponent() {
        this.livro = {
            titulo: 'Learning JavaScript Data Structures and Algorithms 2nd edition',
            rating: 4.54321,
            numeroPaginas: 314,
            preco: 44.99,
            dataLancamento: new Date(2016, 5, 23),
            url: 'http://a.co/glqjpRP'
        };
        this.livros = ['Java', 'Angular 2'];
    }
    ExemplosPipesComponent.prototype.addCurso = function (valor) {
        this.livros.push(valor);
    };
    ExemplosPipesComponent.prototype.ngOnInit = function () {
    };
    ExemplosPipesComponent = __decorate([
        core_1.Component({
            selector: 'app-exemplos-pipes',
            templateUrl: './exemplos-pipes.component.html',
            styleUrls: ['./exemplos-pipes.component.scss']
        })
    ], ExemplosPipesComponent);
    return ExemplosPipesComponent;
}());
exports.ExemplosPipesComponent = ExemplosPipesComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var visitor_service_1 = require('../../services/visitor.service');
var UserInput = (function () {
    function UserInput(_visitorService) {
        this._visitorService = _visitorService;
    }
    UserInput.prototype.postVisitor = function (firstName, lastName, balance) {
        this._visitorService.postVisitor({ firstName: firstName, lastName: lastName, balance: balance })
            .then(function (visitor) {
            console.log('visitor', visitor);
            return (visitor);
        })
            .catch(function (err) { return console.error(err); });
    };
    UserInput = __decorate([
        core_1.Component({
            selector: 'user-input',
            templateUrl: './app/components/user-input/app.user-input.html',
            styleUrls: ['../styles/main.css']
        }), 
        __metadata('design:paramtypes', [visitor_service_1.VisitorService])
    ], UserInput);
    return UserInput;
}());
exports.UserInput = UserInput;
//# sourceMappingURL=app.user-input.js.map
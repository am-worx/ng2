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
var UsersTable = (function () {
    function UsersTable(_visitorService) {
        this._visitorService = _visitorService;
    }
    UsersTable.prototype.getVisitors = function () {
        var _this = this;
        this._visitorService.getVisitors()
            .then(function (visitors) { return _this.visitors = visitors; });
    };
    UsersTable.prototype.postVisitor = function (firstName, lastName, balance) {
        var _this = this;
        this._visitorService.postVisitor({ firstName: firstName, lastName: lastName, balance: balance })
            .then(function (visitor) {
            _this.visitors.push(visitor);
        })
            .catch(function (err) { return console.error(err); });
    };
    UsersTable.prototype.deleteVisitor = function (visitorId) {
        var _this = this;
        this._visitorService.deleteVisitor(visitorId)
            .then(function (visitor) {
            _this.visitors = _this.visitors.filter(function (item) {
                return item._id !== visitor._id;
            });
        });
    };
    UsersTable.prototype.ngOnInit = function () {
        this.visitors = this.getVisitors();
    };
    UsersTable = __decorate([
        core_1.Component({
            selector: 'users-table',
            templateUrl: './app/components/users-table/app.users-table.html',
            styleUrls: ['../styles/main.css']
        }), 
        __metadata('design:paramtypes', [visitor_service_1.VisitorService])
    ], UsersTable);
    return UsersTable;
}());
exports.UsersTable = UsersTable;
//# sourceMappingURL=app.users-table.js.map
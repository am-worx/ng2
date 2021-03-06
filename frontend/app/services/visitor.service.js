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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var VisitorService = (function () {
    function VisitorService(http) {
        this.http = http;
        this.visitorsUrl = 'http://localhost:3000/api/visitors';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    VisitorService.prototype.getVisitors = function () {
        return this.http.get(this.visitorsUrl)
            .toPromise()
            .then(function (response) {
            console.log('Visitors response 2', response.json());
            return response.json();
        })
            .catch(this.handleError);
    };
    VisitorService.prototype.postVisitor = function (data) {
        return this.http
            .post(this.visitorsUrl, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    VisitorService.prototype.deleteVisitor = function (visitorId) {
        var url = this.visitorsUrl + "/" + visitorId;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    VisitorService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    };
    VisitorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VisitorService);
    return VisitorService;
}());
exports.VisitorService = VisitorService;
//# sourceMappingURL=visitor.service.js.map
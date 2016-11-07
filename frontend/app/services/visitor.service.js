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
var Observable_1 = require('rxjs/Observable');
var VisitorService = (function () {
    function VisitorService(http) {
        this.http = http;
        this.visitorsUrl = 'http://localhost:3000/api/visitors';
    }
    VisitorService.prototype.getVisitors = function () {
        return this.http.get(this.visitorsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    VisitorService.prototype.postVisitor = function (visitor) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/visitors', visitor, { headers: headers })
            .map(function (res) { return res.json(); }).subscribe(function (data) { console.log(data); }, function (err) { console.log(err); });
    };
    VisitorService.prototype.deleteVisitor = function (visitorId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:8080/api/visitors', visitorId, { headers: headers })
            .map(function (res) { return res.json(); }).subscribe(function (data) { console.log(data); }, function (err) { console.log(err); });
    };
    VisitorService.prototype.extractData = function (res) {
        console.log('Candy Response', res);
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        //return body.data || { };
        return body || {};
    };
    VisitorService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    VisitorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VisitorService);
    return VisitorService;
}());
exports.VisitorService = VisitorService;
//# sourceMappingURL=visitor.service.js.map
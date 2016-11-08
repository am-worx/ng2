import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Visitor } from '../models/visitor';

@Injectable()
export class VisitorService {
	constructor (private http: Http) {}

	private visitorsUrl = 'http://localhost:3000/api/visitors';

	getVisitors(): Promise<Visitor[]> {
		return this.http.get(this.visitorsUrl)
			.toPromise()
			.then(response => {
				console.log('Visitors response 2', response.json());
				return response.json() as Visitor[]
			})
			.catch(this.handleError);
	}

	/*getVisitors (): Observable<Visitor[]> {
		return this.http.get(this.visitorsUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}*/

	postVisitor(visitor: string) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('http://localhost:8080/api/visitors', visitor, {headers: headers})
			.map(res => res.json()).subscribe(
				data => { console.log(data); },
				err => { console.log(err); }
			);
	}

	deleteVisitor(visitorId: string) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.delete('http://localhost:8080/api/visitors', visitorId, {headers: headers})
			.map(res => res.json()).subscribe(
				data => { console.log(data); },
				err => { console.log(err); }
			);
	}

	private extractData(res: Response) {
		console.log('Candy Response', res);
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		let body = res.json();
		//return body.data || { };
		return body || { };
	}
	private handleError (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure
		let errMsg = error.message || 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}
import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Visitor } from '../models/visitor';

@Injectable()
export class VisitorService {
	constructor (private http: Http) {}

	private visitorsUrl = 'http://localhost:3000/api/visitors';
	private headers = new Headers({'Content-Type': 'application/json'});

	getVisitors(): Promise<Visitor[]> {
		return this.http.get(this.visitorsUrl)
			.toPromise()
			.then(response => {
				console.log('Visitors response 2', response.json());
				return response.json() as Visitor[]
			})
			.catch(this.handleError);
	}

	postVisitor(data): Promise<Visitor> {
		return this.http
			.post(this.visitorsUrl, JSON.stringify(data), {headers: this.headers})
			.toPromise()
			.then(res => res.json())
			.catch(this.handleError);
	}

	deleteVisitor(visitorId: string): Promise<void> {
		const url = `${this.visitorsUrl}/${visitorId}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(res => res.json())
			.catch(this.handleError);
	}

	private handleError (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure.
		let errMsg = error.message || 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}
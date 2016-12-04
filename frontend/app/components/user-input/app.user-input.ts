import {Component} from '@angular/core';
import {Visitor} from '../../models/visitor';
import {VisitorService} from '../../services/visitor.service';

@Component({
	selector: 'user-input',
	templateUrl: './app/components/user-input/app.user-input.html',
	styleUrls: ['../styles/main.css']
})

export class UserInput {

	constructor(
		private _visitorService: VisitorService
	){}

	postVisitor(firstName, lastName, balance) {
		this._visitorService.postVisitor({firstName, lastName, balance})
			.then(visitor => {
				console.log('visitor', visitor);
				return(visitor);
			})
			.catch(err => console.error(err));
	}
}
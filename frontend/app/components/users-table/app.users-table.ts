import {Component, OnInit} from '@angular/core';
import {Visitor} from '../../models/visitor';
import {VisitorService} from '../../services/visitor.service';

@Component({
	selector: 'users-table',
	templateUrl: './app/components/users-table/app.users-table.html',
	styleUrls: ['../styles/main.css']
})

export class UsersTable implements OnInit {
	visitors: Visitor[];

	constructor(
		private _visitorService: VisitorService
	){}

	getVisitors() {
		this._visitorService.getVisitors()
			.then(
				visitors => this.visitors = visitors
			)
	}

	postVisitor(firstName, lastName, balance) {
		this._visitorService.postVisitor({firstName, lastName, balance})
			.then(visitor => {
				this.visitors.push(visitor);
			})
			.catch(err => console.error(err));
	}

	deleteVisitor(visitorId: string) {
		this._visitorService.deleteVisitor(visitorId)
			.then(visitor => {
				this.visitors = this.visitors.filter(item => {
					return item._id !== visitor._id
				});
			})
	}

	ngOnInit() {
		this.visitors = this.getVisitors();
	}

}
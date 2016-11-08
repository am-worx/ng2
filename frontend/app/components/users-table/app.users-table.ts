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

	deleteVisitor(visitorId: string) {
		console.log('VV', visitorId);
		this._visitorService.deleteVisitor(visitorId)
	}

	ngOnInit() {
		this.getVisitors();
	}

}
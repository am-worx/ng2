import {Component} from '@angular/core';
import {VisitorService} from '../../services/visitor.service'

@Component({
	selector: 'my-app',
	templateUrl: './app/components/my-app/app.my-app.html',
	styleUrls: ['../styles/main.css'],
	providers: [VisitorService]
})

export class MyApp {}
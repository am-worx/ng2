import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';

import {MyApp} from './components/my-app/app.my-app';
import {UserInput} from './components/user-input/app.user-input'
import {UsersTable} from './components/users-table/app.users-table';

import {VisitorService} from './services/visitor.service'

@NgModule({
	imports: [BrowserModule, HttpModule],
	declarations: [MyApp, UserInput, UsersTable],
	bootstrap: [MyApp],
	providers: [VisitorService]
})
export class AppModule {}
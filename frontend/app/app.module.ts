import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MyApp} from './components/my-app/app.my-app';
import {UserInput} from './components/user-input/app.user-input'
import {UsersTable} from './components/users-table/app.users-table';

@NgModule({
	imports: [BrowserModule],
	declarations: [MyApp, UserInput, UsersTable],
	bootstrap: [MyApp]
})
export class AppModule {}
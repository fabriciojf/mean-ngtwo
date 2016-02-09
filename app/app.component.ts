import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';
import {todoService} from './service/todo.service';
import {authService} from './service/auth.service'
import {TodoFormComponent} from './todo.form.component'
import {HTTP_PROVIDERS} from 'angular2/http'
import 'rxjs/Rx' //operators for es6 ... wtf

@Component({
    selector: 'app',
    directives: [TodoFormComponent],
    template: `
		<todo-form></todo-form>
	`,
	providers: [
		HTTP_PROVIDERS,
		authService,
		todoService
	]
})

export class AppComponent{};

bootstrap(AppComponent, [todoService, authService])
	.catch(err => console.log(err));

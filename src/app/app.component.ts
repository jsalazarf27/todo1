import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'my application';
	author = 'Jhon Salazar';
	count = 0;
	imgSource = './../favicon.ico';
	isEnable = true;
	textButton = this.isEnable ? 'Enable' : 'disable';
}

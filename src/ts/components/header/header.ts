import { Component } from '@angular/core';
import { LayoutService } from '../../services';


@Component({
	selector: 'header',
	templateUrl: './header.html',
	styleUrls: ['./header.scss']
})
export class Header {

	constructor(
		private layoutSvc: LayoutService
	) {}

	onMenuClick() {
		this.layoutSvc.onMenuClick();
	}

}
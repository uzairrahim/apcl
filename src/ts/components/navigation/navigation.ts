import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services';


@Component({
	selector: 'navigation',
	templateUrl: './navigation.html',
	styleUrls: ['./navigation.scss']
})
export class Navigation implements OnInit {

	public active: boolean = false

	constructor(
		private layoutSvc: LayoutService
	) {

	}

	ngOnInit() {
		this.layoutSvc.onActivateNavigation.subscribe(() => {
			this.activateNavigation();
		});
	}

	onCloseNav() {
		this.activateNavigation();
	}

	activateNavigation() {
		this.active = !this.active;
	}

}
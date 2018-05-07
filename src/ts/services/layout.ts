import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LayoutService {

	public onActivateNavigation: EventEmitter<any> = new EventEmitter();
	
	constructor() {

	}

	onMenuClick() {
		this.onActivateNavigation.emit();
	}

}
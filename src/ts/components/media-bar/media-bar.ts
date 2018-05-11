import { Component, OnInit } from '@angular/core';
import { LINKS } from '../../constants';

@Component({
	selector: 'media-bar',
	templateUrl: './media-bar.html',
	styleUrls: ['./media-bar.scss']
})
export class MediaBar implements OnInit {

	public links = LINKS;

	constructor() {

	}

	ngOnInit() {

	}

}
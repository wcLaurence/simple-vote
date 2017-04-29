import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import {
	PollService,
	UserService
} from '../../services';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	public collapseNavbar: boolean = true;
	public showUpdateUserComponent: boolean = false;

	constructor(private userService: UserService,
		private pollService: PollService,
		private route: ActivatedRoute,
		private router: Router,
		private cookieService: CookieService) { }

	ngOnInit() {
	}

	toggleCollapseNavbar() {
		this.collapseNavbar = !this.collapseNavbar;
	}

	createPoll() {
		this.pollService.createPoll().subscribe(p => {
			console.log(p);
			this.router.navigate(['/poll', p.id]);
		});
	}

	changeUserName() {
		this.showUpdateUserComponent = true;
	}

	logout() {
		this.cookieService.remove('jwt');
		location.reload();
	}


}
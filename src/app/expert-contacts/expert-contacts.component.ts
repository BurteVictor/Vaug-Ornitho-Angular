import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-expert-contacts',
  templateUrl: './expert-contacts.component.html',
  styleUrls: ['./expert-contacts.component.css']
})
export class ExpertContactsComponent implements OnInit {
users: User[];
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
      this.userService.getExpertContacts()
        .subscribe(
          data => {
            this.users = data;
          },
          e => console.log(e));
  }
}



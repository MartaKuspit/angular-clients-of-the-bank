import {Component, OnInit} from '@angular/core';
import {Client} from '../../client';
import {HttpClient} from '@angular/common/http';
import {User} from '../../user';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'user/user-list';
  users: User[] = [];
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.httpClient.get<User[]>(this.url )
      .subscribe(users => this.users = users);
  }
}

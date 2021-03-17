import {Component, OnInit} from '@angular/core';
import {Client} from '../../client';
import {HttpClient} from '@angular/common/http';
import {User} from '../../user';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-delete-user-list',
  templateUrl: './delete-user.component.html'
})
export class DeleteUserComponent implements OnInit {
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'delete-user/';
  user: User = {
    username: '',
    role: '',
    password: ''
  };
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.deleteUser(this.user);
  }

  deleteUser(user: User): void {
    const userId = this.activatedRoute.snapshot.params.userId;
    this.httpClient.delete(this.baseUrl + 'delete-user' + '/' + userId)
      .subscribe(() => {
        alert('Użytkownik został usunięty');
      });
  }

}

import {HttpClient} from '@angular/common/http';
import {Client} from '../../client';
import {Component, OnInit} from '@angular/core';
import {ClientValidationErrors} from '../../clientValidationErrors';
import {User} from '../../user';
import {UserValidationErrors} from '../../UserValidationErrors';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';



@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html'
})
export class AddNewUserComponent {
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'user/add-new-user';
  newUser: User = {
    username: '',
    role: '',
    password: '',
  };
  validationErrors: UserValidationErrors = {};
  submitted = false;

  constructor(private httpClient: HttpClient, private router: Router) {
  }
  addNewUser(): void {
    this.httpClient.post<User>(this.url, this.newUser)
      .subscribe(
        () => {alert('Nowy użytkownik został dodany do bazy'),
          this.router.navigate(['']);
        },
        errorResponse => {
          this.submitted = true;
          this.validationErrors = errorResponse.error;
        }
      );
  }
}

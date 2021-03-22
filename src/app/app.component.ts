import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from './user';
import {Client} from './client';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  username: string;
  password: string;
  user: User = null;
  seekword: string;
  clients: Client[] = [];
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient, private router: Router) {
  }
  // @HostListener('window:beforeunload')
  // onWindowUnload(): void{
  //   localStorage.removeItem('authorizationHeader');
  // }
  // ngOnInit(): void {
  //   this.login();
  // }
  //
  // onLoginFormSubmit(): void {
  //   this.storeAuthorizationInLocalstorage();
  //   this.login( () => alert('Niepoprawne dane logowania'));
  //   this.username = '';
  //   this.password = '';
  // }
  //
  // private storeAuthorizationInLocalstorage(): void {
  //   const authorizationHeader = 'Basic ' + btoa(this.username + ':' + this.password);
  //   localStorage.setItem('authorizationHeader', authorizationHeader);
  // }
  //
  // private login(errorCallback?: () => void): void {
  //   this.httpClient.post<User>(this.baseUrl + 'login', {})
  //     .subscribe(user => {
  //       this.router.navigate(['']);
  //       this.user = user;
  //     },
  //       () => {
  //       if (errorCallback){
  //         errorCallback();
  //       }
  //       });
  // }
  //
  //
  // logout(): void {
  //   // localStorage.removeItem('authorizationHeader');
  //   this.router.navigate(['']);
  //   setTimeout(() => location.reload(), 100);
  // }

}


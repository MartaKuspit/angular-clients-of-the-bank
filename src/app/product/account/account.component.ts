import {Component, OnInit} from '@angular/core';
import {Client} from '../../client';
import {HttpClient} from '@angular/common/http';
import {Account} from '../../account';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-product-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit{
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'accounts/';
  clientId: number = this.activatedRoute
    .snapshot
    .params
    .clientId;
  accounts: Account[] = [];
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.httpClient.get<Account[]>(this.url + this.clientId )
      .subscribe(accounts => this.accounts = accounts);
  }

}

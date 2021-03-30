

import {HttpClient} from '@angular/common/http';

import {ActivatedRoute, Router} from '@angular/router';
import {Component} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Account} from '../../../account';




@Component({
  selector: 'app-product-new-account',
  templateUrl: './new-account.component.html'
})
export class NewAccountComponent {
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'account/new-account/';
  newAccount: Account = {
    accountType: undefined ,
    balance: 0
  };
  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  addAccount(): void {
    const clientId: number = this.activatedRoute.snapshot.params.clientId;
    this.httpClient.post<Account>(this.url + clientId, this.newAccount)
      .subscribe(
        () => { alert('Konto zostało poprawnie dodane');
                this.router.navigate(['../product/account/' + clientId]); });
  }
}

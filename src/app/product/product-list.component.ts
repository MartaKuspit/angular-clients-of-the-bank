import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Client} from '../client';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'client/find-client/find-client-byId';
  clientId: number;
  foundClient: Client = {
    id: 0,
    firstName: '',
    lastName: '',
    pesel: '',
    accounts: [],
    deposits: [],
    loans: [],
    mortgages: [],
  };
  howmanyAccounts: number;
  howmanyDeposits: number;
  howmanyLoans: number;
  howmanyMortgages: number;
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clientId = this.activatedRoute
      .snapshot
      .params
      .clientId;
    this.httpClient.get<Client>(this.url + '/' + this.clientId)
      .subscribe(client => {
        this.foundClient = client;
        this.howmanyAccounts = client.accounts.length;
        this.howmanyDeposits = client.deposits.length;
        this.howmanyLoans = client.loans.length;
        this.howmanyMortgages = client.mortgages.length;
      });
  }

}

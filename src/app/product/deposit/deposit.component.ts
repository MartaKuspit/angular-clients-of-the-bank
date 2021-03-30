import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Deposit} from '../../deposit';
import {environment} from '../../../environments/environment';
import {Client} from '../../client';

@Component({
  selector: 'app-product-deposit',
  templateUrl: './deposit.component.html'
})
export class DepositComponent implements OnInit{
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'deposits/';
  clientId: number = this.activatedRoute
    .snapshot
    .params
    .clientId;
  deposits: Deposit[] = [];
  client: Client = {
    firstName: '',
    lastName: '',
    pesel: '',
  };
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.httpClient.get<Deposit[]>(this.url + this.clientId)
      .subscribe(deposits => this.deposits = deposits);
    this.httpClient.get<Client>(this.baseUrl + 'client/find-client/find-client-byId/' + this.clientId)
      .subscribe(client => this.client = client);
  }

}

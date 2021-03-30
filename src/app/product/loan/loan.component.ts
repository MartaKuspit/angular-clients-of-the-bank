import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Loan} from '../../loan';
import {environment} from '../../../environments/environment';
import {Client} from '../../client';

@Component({
  selector: 'app-product-loan',
  templateUrl: './loan.component.html'
})
export class LoanComponent implements OnInit{
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'loans/';
  clientId: number = this.activatedRoute
    .snapshot
    .params
    .clientId;
  loans: Loan[] = [];
  client: Client = {
    firstName: '',
    lastName: '',
    pesel: '',
  };
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.httpClient.get<Loan[]>(this.url + this.clientId)
      .subscribe(loans => this.loans = loans);
    this.httpClient.get<Client>(this.baseUrl + 'client/find-client/find-client-byId/' + this.clientId)
      .subscribe(client => this.client = client);
  }

}

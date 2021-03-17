import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Deposit} from '../../deposit';
import {environment} from '../../../environments/environment';

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
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.httpClient.get<Deposit[]>(this.url + this.clientId)
      .subscribe(deposits => this.deposits = deposits);
  }

}

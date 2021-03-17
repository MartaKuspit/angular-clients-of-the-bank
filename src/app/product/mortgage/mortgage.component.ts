import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Mortgage} from '../../mortgage';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-product-mortgage',
  templateUrl: './mortgage.component.html'
})
export class MortgageComponent implements OnInit{
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'mortgages/';
  clientId: number = this.activatedRoute
    .snapshot
    .params
    .clientId;
  mortgages: Mortgage[] = [];
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.httpClient.get<Mortgage[]>(this.url + this.clientId)
      .subscribe(mortgages => this.mortgages = mortgages);
  }

}

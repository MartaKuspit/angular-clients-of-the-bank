

import {HttpClient} from '@angular/common/http';

import {ActivatedRoute, Router} from '@angular/router';
import {Component} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Deposit} from '../../../deposit';
import {Loan} from '../../../loan';
import {Mortgage} from '../../../mortgage';


@Component({
  selector: 'app-product-new-mortgage',
  templateUrl: './new-mortgage.component.html'
})
export class NewMortgageComponent {
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'mortgage/new-mortgage/';
  newMortgage: Mortgage = {
    mortgageAmount: 0 ,
    interest: 0
  };
  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  addMortgage(): void {
    const clientId: number = this.activatedRoute.snapshot.params.clientId;
    this.httpClient.post<Mortgage>(this.url + clientId, this.newMortgage)
      .subscribe(
        () => { alert('Kredyt hipoteczny został udzielony!');
                this.router.navigate(['../product/mortgage/' + clientId]); });
  }
}

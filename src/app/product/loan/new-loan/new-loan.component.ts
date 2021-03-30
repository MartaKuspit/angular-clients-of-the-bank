

import {HttpClient} from '@angular/common/http';

import {ActivatedRoute, Router} from '@angular/router';
import {Component} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Deposit} from '../../../deposit';
import {Loan} from '../../../loan';


@Component({
  selector: 'app-product-new-loan',
  templateUrl: './new-loan.component.html'
})
export class NewLoanComponent {
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'loan/new-loan/';
  newLoan: Loan = {
    loanAmount: 0 ,
    interest: 0
  };
  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  addLoan(): void {
    const clientId: number = this.activatedRoute.snapshot.params.clientId;
    this.httpClient.post<Loan>(this.url + clientId, this.newLoan)
      .subscribe(
        () => { alert('Pożyczka została udzielona!');
                this.router.navigate(['../product/loan/' + clientId]); });
  }
}

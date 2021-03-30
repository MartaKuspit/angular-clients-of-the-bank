

import {HttpClient} from '@angular/common/http';

import {ActivatedRoute, Router} from '@angular/router';
import {Component} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Deposit} from '../../../deposit';


@Component({
  selector: 'app-product-new-deposit',
  templateUrl: './new-deposit.component.html'
})
export class NewDepositComponent {
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'deposit/new-deposit/';
  newDeposit: Deposit = {
    depositAmount: 0 ,
    interest: 0
  };
  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  addDeposit(): void {
    const clientId: number = this.activatedRoute.snapshot.params.clientId;
    this.httpClient.post<Deposit>(this.url + clientId, this.newDeposit)
      .subscribe(
        () => { alert('Depozyt został poprawnie dodany');
                this.router.navigate(['../product/deposit/' + clientId]); });
  }
}

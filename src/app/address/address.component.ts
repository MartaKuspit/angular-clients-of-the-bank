import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Address} from '../address';
import {AddressValidationErrors} from '../addressValidationErrors';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent {
  newAddress: Address = {
    street: '',
    streetNumber: '',
    flatNumber: '',
    city: '',
    zip: ''
  };
  validationErrors: AddressValidationErrors = {};
  submitted = false;
  responses: AddressValidationErrors [];
  baseUrl = environment.baseUrl;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private router: Router) {
  }

  addAddressToClient(): void {
    const clientId: number = this.activatedRoute.snapshot.params.clientId;
    this.httpClient.post<Address>(this.baseUrl + 'address/' + clientId, this.newAddress)
      .subscribe(
        () => {alert('Adres został dodany do klienta');
               this.router.navigate(['../../client/find-client/find-client-byId/' + clientId]);
        },
        errorResponse => {
          this.submitted = true;
          this.validationErrors = errorResponse.error;
        }
      );
    this.submitted = false;
  }
}


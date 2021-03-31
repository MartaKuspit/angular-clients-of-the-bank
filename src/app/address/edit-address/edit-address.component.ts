import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Address} from '../../address';
import {AddressValidationErrors} from '../../addressValidationErrors';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html'
})
export class EditAddressComponent implements OnInit{
  baseUrl = environment.baseUrl;
  addressId = this.activatedRoute.snapshot.params.addressId;
  oldAddress: Address = {
    street: '',
    streetNumber: '',
    flatNumber: '',
    city: '',
    zip: ''
  };
  newAddress: Address = {
    id: this.addressId,
    street: '',
    streetNumber: '',
    flatNumber: '',
    city: '',
    zip: ''
  };
  validationErrors: AddressValidationErrors = {};
  submitted = false;
  constructor(private activatedRoute: ActivatedRoute,  private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
        this.httpClient.get<Address>(this.baseUrl + 'address/' + this.addressId)
          .subscribe(address => this.oldAddress = address);
    }

  saveChangesInAddress(): void {
    this.httpClient.put<Address>(this.baseUrl + 'address/addressToChange/' + this.addressId, this.newAddress)
      .subscribe(
        () => {
          alert('Adres został zmieniony');
          this.router.navigate(['../../client/find-client']);
        },
        errorResponse => {
          this.submitted = true;
          this.validationErrors = errorResponse.error;
        }
      );
  }
}


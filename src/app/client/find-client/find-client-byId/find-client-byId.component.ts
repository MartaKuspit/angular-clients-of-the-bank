import {Component, OnInit} from '@angular/core';
import {Client} from '../../../client';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Address} from '../../../address';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-find-client-by-id',
  templateUrl: './find-client-byId.component.html'
})
export class FindClientByIdComponent {
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'client/find-client/find-client-byId';
  clients: Client[] = [];
  addresses: Address[] = [];
  clientId: number = this.activatedRoute
    .snapshot
    .params
    .id;
  foundClient: Client = {
    id: 0,
    firstName: '',
    lastName: '',
    pesel: '',
    addresses: []
  };
  address: Address = {
  street: '',
  streetNumber: '',
  flatNumber: '',
  city: '',
  zip: ''
};
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private router: Router) {
  }

  findClient(): void {
    this.httpClient.get<Client>(this.url + '/' + this.clientId)
      .subscribe(client => {
        if (this.foundClient !== null){
        this.foundClient = client;
        this.submitted = true;
        }
        if (this.foundClient == null) {
          alert('Klient o podanym Id nie istnieje');
          this.router.navigate(['../../client/find-client']);
        }
        this.addresses = client.addresses;
      });
  }
  deleteClient(client: Client): void {
    this.httpClient.delete(this.url + '/' + this.clientId)
      .subscribe(() => {
        alert('Klient został usunięty');
        this.router.navigate(['../../client/clients-list']);
      });
  }

  deleteAddress(address: Address): void {
    const addressId = address.id;
    this.httpClient.delete(this.baseUrl + 'address/' + addressId + '/' + this.clientId) // zmieniam http
      .subscribe(() => {
        alert('Adres został usunięty');
        this.findClient();
      });
  }
}


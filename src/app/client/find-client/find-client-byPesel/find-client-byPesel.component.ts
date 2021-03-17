import {Component, OnInit} from '@angular/core';
import {Client} from '../../../client';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Address} from '../../../address';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-find-client-by-pesel',
  templateUrl: './find-client-byPesel.component.html'
})
export class FindClientByPeselComponent {
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'client/find-client/find-client-byPesel';
  clients: Client[] = [];
  addresses: Address[] = [];
  clientPesel: string;
  clientId: number;
  foundClient: Client = {
    id: 0,
    firstName: '',
    lastName: '',
    pesel: '',
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
    this.httpClient.get<Client>(this.url + '/' + this.clientPesel)
      .subscribe(client => {
        if (this.foundClient !== null) {
          this.foundClient = client;
          this.submitted = true;
        }
        if (this.foundClient == null) {
          alert('Klient o podanym numerze pesel nie figuruje w bazie');
          this.router.navigate(['../../client/find-client']);
        }
        this.addresses = client.addresses;
        this.clientId = client.id;
      });
  }
  deleteClient(client: Client): void {
    this.httpClient.delete(this.baseUrl + 'client/find-client/find-client-byId/' + this.clientId)
      .subscribe(() => {
        alert('Klient został usunięty');
        this.router.navigate(['../../client/find-client']);
      });
  }

  deleteAddress(address: Address): void {
    const addressId = address.id;
    this.httpClient.delete(this.baseUrl + 'address/' + addressId + '/' + this.clientId)
      .subscribe(() => {
        alert('Adres został usunięty');
        this.findClient();
      });
  }
}


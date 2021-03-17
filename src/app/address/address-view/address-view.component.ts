import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Address} from '../../address';
import {Client} from '../../client';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html'
})
export class AddressViewComponent implements OnInit {
  clientId = this.activatedRoute.snapshot.params.clientId;
  foundAddresses: Address[] = [];
  client: Client;
  baseUrl = environment.baseUrl;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<Client>(this.baseUrl + 'client/find-client/find-client-byId/' + this.clientId)
      .subscribe(client => {
        this.client = client,
          this.foundAddresses = client.addresses;
      });

  }
}


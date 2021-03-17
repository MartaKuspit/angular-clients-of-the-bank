import {Component, OnInit} from '@angular/core';
import {Client} from '../../client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html'
})
export class ClientsListComponent implements OnInit{
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'client/clients-list';
  clients: Client[] = [];
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<Client[]>(this.url )
      .subscribe(clients => this.clients = clients);
  }

}

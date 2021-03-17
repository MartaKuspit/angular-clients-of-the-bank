import {Component, OnInit} from '@angular/core';
import {Client} from '../../client';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Address} from '../../address';
import {ClientValidationErrors} from '../../clientValidationErrors';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html'
})
export class EditClientComponent implements OnInit{
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'client/edit-client/id';
  clientId: number = this.activatedRoute
    .snapshot
    .params
    .clientId;
  editClient: Client = {
    firstName: '',
    lastName: '',
    pesel: '',
    addresses: []
  };
  editingClient: Client = {
    id: this.clientId,
    firstName: '',
    lastName: '',
    pesel: '',
    addresses: []
  };
  validationErrors: ClientValidationErrors = {};
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    this.httpClient.get<Client>(this.baseUrl + 'client/find-client/find-client-byId' + '/' + this.clientId)
      .subscribe(editingClient =>
          this.editingClient = editingClient);
  }


  updateClient(): void {
    this.httpClient.put(this.baseUrl + 'client/edit-client/' + this.clientId, this.editClient)
      .subscribe(
        () => alert('Dane klienta zostały zmodyfikowane'),
        errorResponse => {
          this.submitted = true;
          this.validationErrors = errorResponse.error;
        }
      );
  }
}


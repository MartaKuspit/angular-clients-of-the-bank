import {HttpClient} from '@angular/common/http';
import {Client} from '../../client';
import {Component, OnInit} from '@angular/core';
import {ClientValidationErrors} from '../../clientValidationErrors';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';



@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html'
})
export class ClientCreateComponent {
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'client/client-create';
  newClient: Client = {
    firstName: '',
    lastName: '',
    pesel: '',
  };
  validationErrors: ClientValidationErrors = {};
  submitted = false;

  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  create(): void {
    this.httpClient.post<Client>(this.url, this.newClient)
      .subscribe(
        () => { alert('Nowy klient zapisany w bazie. Pamiętaj dodaj do klienta dane adresowe!');
                this.router.navigate(['../client/clients-list']);
        },
        errorResponse => {
          this.submitted = true;
          this.validationErrors = errorResponse.error;
        }
      );
  }
}

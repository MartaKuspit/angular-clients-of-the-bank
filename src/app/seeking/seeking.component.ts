import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Client} from '../client';
import {Deposit} from '../deposit';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-seeking',
  templateUrl: './seeking.component.html'
})
export class SeekingComponent implements OnInit{
  baseUrl = environment.baseUrl;
  seekword: string = this.activatedRoute
    .snapshot
    .params
    .seekword;
   clients: Client[] = [];
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.seekingTheWord();
  }
  seekingTheWord(): void {
    this.httpClient.get<Client[]>(this.baseUrl + 'seeking/' + this.seekword)
      .subscribe(clients => {
        if (this.clients !== null) {
          this.clients = clients;
          this.seekingTheWord();
        }
        if (this.clients == null) {
          alert('Nieznaleziono podanej frazy. Spróbuj jeszcze raz!');
          this.router.navigate(['']);
        }
      });
}
}

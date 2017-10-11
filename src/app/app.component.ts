import { Component, OnInit } from '@angular/core';

import { PersonService } from './services/person.service';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService]
})
export class AppComponent implements OnInit  {
  public titulo: string;
  public people: Person[];

  constructor(
    private _personService: PersonService
  ) {
    this.titulo = 'Listado de Suscripciones';
  }

  ngOnInit() {
    console.log('productos-list.component.ts cargado');
    this.getPeople();
  }

  getPeople() {
    this._personService.getPeople().subscribe(
      result => {

        if (result.code != 200) {
          console.log(result);
        }else {
          this.people = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}

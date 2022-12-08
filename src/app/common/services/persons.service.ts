import { Injectable } from '@angular/core';
import {IPerson} from "../interfaces/persons.interface";
import {persons} from "../../shared/dates/persons";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor() { }

  getPersons():Observable<IPerson[]>{
    return of(persons);
  }
  getPerson(id:string | number):Observable<IPerson | undefined>{
    return of(persons.find(person=>person.id === id));
  }

}

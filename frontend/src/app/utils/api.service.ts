import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environnement } from '../environnement/environnement';

console.log("Environnement is  :  ")
console.table(environnement)
const API_URL = environnement['IP_NEST']+':'+environnement['NEST_PORT_INIT'];
console.log("API_URL", API_URL)

@Injectable({
    providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  public get(url: String): Observable<any> {
    return this.http.get(API_URL + '/api/' + url).pipe(map(res => res));
  }
}
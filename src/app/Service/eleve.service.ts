import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Eleve} from '../Model/Eleve';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Eleve[]>('http://localhost:8080/eleves');
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { moduloModel } from '../models/moduloModel';
@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  constructor(private http:HttpClient) { 
   
  }
  traerModulos():Observable<moduloModel[]>{
     return this.http.get<moduloModel[]>('http://localhost:8080/');
  }
  
}

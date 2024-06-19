import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { moduloModel } from '../models/moduloModel';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  constructor(private http: HttpClient) { }


  datosModulo(id: number) {
    const body = { "ID_MODULO": id };

    // Realiza la solicitud POST utilizando HttpClient
    return this.http.post('http://localhost:8080/modulos', body);
  }
  datosModulo2(ID_USUARIO:number):Observable<moduloModel[]>{


    // Realiza la solicitud POST utilizando HttpClient
    const data = {
      ID_MODULO: ID_USUARIO
    }
    return this.http.post<moduloModel[]>('http://localhost:8080/modulosAturorizados', data);
  }


}

import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Usuario, componentModel, moduloModel, usuario } from '../models/moduloModel';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  constructor(private http: HttpClient) { }



  datosModulos(ID_USUARIO: number): Observable<moduloModel[]> {


    // Realiza la solicitud POST utilizando HttpClient
    const data = {
      ID_MODULO: ID_USUARIO
    }
    return this.http.post<moduloModel[]>('http://localhost:8080/modulos/autorizados', data);
  }
  datosComponentes(ID_USUARIO: number): Observable<componentModel[]> {

    // Realiza la solicitud POST utilizando HttpClient
    const data = {
      ID_MODULO: ID_USUARIO
    }
    return this.http.post<componentModel[]>('http://localhost:8080/componentes/autorizados', data);
  }

  listarUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8080/usuarios')
  }

}

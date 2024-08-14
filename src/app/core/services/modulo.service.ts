import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Usuario, componentModel, moduloModel } from '../models/moduloModel';

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
    return this.http.post<moduloModel[]>('http://localhost/Sinapptic-backend/modulos/autorizados', data);
  }
  datosComponentes(ID_USUARIO: number): Observable<componentModel[]> {

    // Realiza la solicitud POST utilizando HttpClient
    const data = {
      ID: ID_USUARIO
    }
    return this.http.post<componentModel[]>('http://localhost/sinapptic/componentes/autorizados', data);
  }

 

}

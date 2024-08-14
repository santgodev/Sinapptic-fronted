import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, observable, Observable, pipe, switchMap, tap } from 'rxjs';
import { insertResponse,  Usuario } from '../models/moduloModel';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../Api_endpoints';
import { SpinnerService } from './spinner.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserUrl = API_ENDPOINTS.Usuarios
  constructor(private http: HttpClient, private SpinnerService: SpinnerService) { }

  private usuarios: Usuario[] = [];
  public usuarios$: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>([])

  listarUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost/Sinapptic-backend/usuarios').pipe(
      tap((userArray) => {
        this.usuarios = userArray;
        this.usuarios$.next(this.usuarios); 
      })
    );
  }

  crearUsuario(usuario: Usuario): Observable<insertResponse> {
    const data = {
      NOMBRE: usuario.NOMBRE,
      APELLIDO: usuario.APELLIDO,
      CORREO: usuario.CORREO,
      CC: usuario.CC,
      TELEFONO: usuario.TELEFONO,
      CONTRASEÑA: usuario.CONTRASEÑA,
      ID_ROL: usuario.ROL,
      IMG_URL: usuario.IMG_URL
    }
    return this.http.post<insertResponse>(this.UserUrl + 'insertar', data)
  }
  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario)
    this.usuarios$.next(this.usuarios)
  }
  listarRoles(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost/Sinapptic-backend/usuarios/roles')
  }
}

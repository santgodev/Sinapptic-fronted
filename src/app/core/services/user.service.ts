import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, observable, Observable, pipe, switchMap, tap } from 'rxjs';
import { insertResponse, Usuario } from '../models/moduloModel';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../Api_endpoints';
import { SpinnerService } from './spinner.service';
import { Cliente } from '../models/clienteModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserUrl = API_ENDPOINTS.Usuarios
  constructor(private http: HttpClient, private SpinnerService: SpinnerService) { }

  private usuarios: Usuario[] = [];
  public usuarios$: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>([])

  private clientes: Cliente[] = [];
  public clientes$: BehaviorSubject<Cliente[]> = new BehaviorSubject<Cliente[]>([])

  listarUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost/Sinapptic-backend/usuarios').pipe(
      tap((userArray) => {
        this.usuarios = userArray;
        this.usuarios$.next(this.usuarios);
      })
    );
  }

  crearUsuario(usuario: Usuario): Observable<Usuario[]> {
    const DATA = {
      NOMBRE: usuario.NOMBRE,
      APELLIDO: usuario.APELLIDO,
      CORREO: usuario.CORREO,
      CC: usuario.CC,
      TELEFONO: usuario.TELEFONO,
      CONTRASEÑA: usuario.CONTRASEÑA,
      ID_ROL: usuario.ROL,
      IMG_URL: usuario.IMG_URL
    }
    return this.http.post<Usuario[]>(this.UserUrl + 'insertar', DATA).pipe(
      tap((usuarios) => {
        this.usuarios$.next(usuarios)
      })
    )
  }

  eliminarUsuario(id: string): Observable<Usuario[]> {
    const DATA = { ID: id }
    return this.http.post<Usuario[]>(this.UserUrl + "eliminar", DATA).pipe(
      tap((usuarios) => {
        this.usuarios$.next(usuarios)
      })
    )
  }



}

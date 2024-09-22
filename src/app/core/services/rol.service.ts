import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, observable, Observable, pipe, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../Api_endpoints';
import { SpinnerService } from './spinner.service';
import { rolModel } from '../models/rolModel';
@Injectable({
  providedIn: 'root'
})
export class RolService {
  rolUrl = API_ENDPOINTS.Roles
  constructor(private http: HttpClient, private SpinnerService: SpinnerService) { }

  private roles: rolModel[] = [];
  public roles$: BehaviorSubject<rolModel[]> = new BehaviorSubject<rolModel[]>([])

  listarRoles(): Observable<rolModel[]> {
    return this.http.get<rolModel[]>('http://localhost/Sinapptic-backend/roles').pipe(
      tap((roles) => {
        this.roles = roles;
        this.roles$.next(roles)

      }),
      switchMap(() => { return this.roles$ })
    )

  }

  crearRol(rol: rolModel): Observable<rolModel[]> {
    let DATA = {
      NOMBRE_ROL: rol.NOMBRE_ROL,
      DESCRIPCION: rol.DESCRIPCION
    }
    return this.http.post<rolModel[]>(this.rolUrl + "insertar", DATA).pipe(
      tap((roles) => {
        this.roles = roles;
        this.roles$.next(roles)
        console.log(this.roles);

      })
    )
  }

  eliminarRol(id: string): Observable<rolModel[]> {
    let DATA = {
      ID_ROL: id
    }
    return this.http.post<rolModel[]>(this.rolUrl + "eliminar", DATA).pipe(
      tap((roles) => {
        this.roles = roles;
        this.roles$.next(roles)
        console.log(this.roles);
      })
    )
  }
}

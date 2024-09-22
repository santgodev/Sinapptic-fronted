import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../models/clienteModel';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { API_ENDPOINTS } from '../../Api_endpoints';
import { Activo } from '../../models/activoModel';

@Injectable({
  providedIn: 'root'
})
export class activoService {

  constructor(private http: HttpClient) { }
  ActivoURL = API_ENDPOINTS.Activos
  private Activos: Activo[] = [];
  public Activos$: BehaviorSubject<Activo[]> = new BehaviorSubject<Activo[]>([])

  listarActivosIdClientes(ID_CLIENTE:string): Observable<Activo[]> {
    let DATA= {
      ID_CLIENTE:ID_CLIENTE
    }
    return this.http.post<Activo[]>(this.ActivoURL+"listar",DATA).pipe(
      tap
        ((activos) => {
          this.Activos = activos;
          this.Activos$.next(activos)
        })
    );
  }
  crearActivo(activo:Activo): Observable<boolean> {
    let DATA= {
      ID_CLIENTE:activo.ID_CLIENTE,
      NOMBRE_ACTIVO:activo.NOMBRE_ACTIVO,
      CATEGORIA:activo.CATEGORIA,
      SERIAL:activo.SERIAL,
      ACCESORIOS:activo.ACCESORIOS,
      INFORMACION:activo.INFORMACION
    }
    return this.http.post<boolean>(this.ActivoURL+"insertar",DATA)
  }


  eliminarActivo(id: string): Observable<Activo[]> {
    const DATA = { ID_ACTIVO: id }
    return this.http.post<Activo[]>(this.ActivoURL + "eliminar", DATA).pipe(
      tap((Clientes) => {
        this.Activos$.next(Clientes)
      })
    )
  }

}

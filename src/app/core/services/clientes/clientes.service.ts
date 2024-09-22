import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../models/clienteModel';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { API_ENDPOINTS } from '../../Api_endpoints';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
  clienteURL = API_ENDPOINTS.Clientes
  private Clientes: Cliente[] = [];
  public Clientes$: BehaviorSubject<Cliente[]> = new BehaviorSubject<Cliente[]>([])

  listarCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clienteURL).pipe(tap((clientes)=>{
      this.Clientes$.next(clientes)
    }))
  }


  crearCliente(Cliente: Cliente): Observable<Cliente[]> {
    const DATA = {
      NOMBRE_CLIENTE: Cliente.NOMBRE_CLIENTE,
      NIT: Cliente.NIT,
      TELEFONO: Cliente.TELEFONO,
      DIRECCION: Cliente.DIRECCION,
      INFORMACION: Cliente.INFORMACION,

    }
    return this.http.post<Cliente[]>(this.clienteURL + 'insertar', DATA).pipe(
      tap((Clientes) => {
        this.Clientes$.next(Clientes)
      })
    )
  }

  eliminarCliente(id: string): Observable<Cliente[]> {
    const DATA = { ID: id }
    return this.http.post<Cliente[]>(this.clienteURL + "eliminar", DATA).pipe(
      tap((Clientes) => {
        this.Clientes$.next(Clientes)
      })
    )
  }

}

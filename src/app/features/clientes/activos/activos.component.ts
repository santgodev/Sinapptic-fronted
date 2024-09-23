import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Actualizado
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { ClientesService } from 'src/app/core/services/clientes/clientes.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { activoService } from 'src/app/core/services/clientes/activo.service';
import { Cliente } from 'src/app/core/models/clienteModel';
import { ActivoFormComponent } from '../activo-form/activo-form.component';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit {

  displayedColumns: string[] = ['ID_ACTIVO', 'NOMBRE_ACTIVO', 'USUARIO', 'CATEGORIA', 'SERIAL', 'ACCESORIOS', 'ACCIONES'];
  clientes: Cliente[] = [];

  constructor(
    public clienteService: ClientesService,
    public activoService: activoService, // Corregido el nombre del servicio
    private logger: NGXLogger,
    private titleService: Title,
    private matDialog: MatDialog, // Actualizado
    private spinnerService: SpinnerService,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Sinapptic - Activos');
    this.logger.log('Activos loaded');
    this.clienteService.listarCliente().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  openClienteFormModal() {
    this.spinnerService.reset();
    this.matDialog.open(ActivoFormComponent);
  }

  listarActivosIdCliente(id: string) {
    this.activoService.listarActivosIdClientes(id).subscribe(activos => {
      console.log(activos);
    });
  }

  removeActivo(id_activo: string) {
    this.activoService.eliminarActivo(id_activo).subscribe();
    this.spinnerService.reset();
  }
}

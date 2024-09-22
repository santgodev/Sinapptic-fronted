import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
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

  displayedColumns: string[] = ['ID_ACTIVO', 'NOMBRE_ACTIVO','USUARIO', 'CATEGORIA', 'SERIAL', 'ACCESORIOS', 'ACCIONES'];
  clientes: Cliente[] = [];
  constructor(
    public clienteService: ClientesService,
    public activoService: activoService,
    private logger: NGXLogger,
    private titleService: Title,
    private matDialog: MatDialog,
    private SpinnerService: SpinnerService,
  ) { }


  ngOnInit() {
    this.titleService.setTitle('Sinapptic - Activos');
    this.logger.log('Activos loaded');
    this.clienteService.listarCliente().subscribe(clientes => { this.clientes = clientes })
  }
  openClienteFormModal() {
    this.SpinnerService.reset();
    this.matDialog.open(ActivoFormComponent)

  }

  listarActivosIdCliente(id: string) {
    this.activoService.listarActivosIdClientes(id).subscribe(activos => {
      console.log(activos);
    })
  }

  removeActivo(id_activo: string) {
    this.activoService.eliminarActivo(id_activo).subscribe()
    this.SpinnerService.reset()
  }
}

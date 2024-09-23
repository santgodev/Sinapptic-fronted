import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Actualizado
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { ClientesService } from 'src/app/core/services/clientes/clientes.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {

  displayedColumns: string[] = ['EMPRESA', 'NIT', 'TELEFONO', 'DIRECCION', 'INFORMACION', 'ACCIONES'];
  
  constructor(
    public clienteService: ClientesService,
    private logger: NGXLogger,
    private titleService: Title,
    private matDialog: MatDialog, // Actualizado
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Sinapptic - Users');
    this.logger.log('Users loaded');
    this.clienteService.listarCliente().subscribe();
  }

  openClienteFormModal() {
    this.matDialog.open(ClienteFormComponent);
  }

  removeCliente(id: string) {
    this.clienteService.eliminarCliente(id).subscribe();
  }
}

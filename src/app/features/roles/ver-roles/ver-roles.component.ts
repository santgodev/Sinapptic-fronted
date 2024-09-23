import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Cambiado a MatDialog
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { FormUserCreateComponent } from '../../users/form-user-create/form-user-create.component';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { CrearRolesComponent } from '../../roles/crear-roles/crear-roles.component';
import { RolService } from 'src/app/core/services/rol.service';

@Component({
  selector: 'app-ver-roles',
  templateUrl: './ver-roles.component.html',
  styleUrls: ['./ver-roles.component.css']
})
export class VerRolesComponent implements OnInit {

  displayedColumns: string[] = ['ID_ROL', 'NOMBRE_ROL', 'DESCRIPCION', 'ACCIONES'];

  constructor(
    public rolService: RolService,
    private logger: NGXLogger,
    private titleService: Title,
    private matDialog: MatDialog, // Usar MatDialog en lugar de MatLegacyDialog
    private spinnerService: SpinnerService, // Cambiado a minúscula para seguir las convenciones
  ) { }
  
  ngOnInit() {
    this.titleService.setTitle('Sinapptic - Roles');
    this.logger.log('Roles loaded'); // Cambiado a 'Roles loaded'
    this.rolService.listarRoles().subscribe();
  }

  openUserFormModal() {
    this.spinnerService.reset(); // Llama primero al spinner
    this.matDialog.open(FormUserCreateComponent);
  }

  openRolFormModal() {
    this.spinnerService.reset(); // Llama primero al spinner
    this.matDialog.open(CrearRolesComponent);
  }

  removeRol(id: string) {
    this.rolService.eliminarRol(id).subscribe();
  }
}

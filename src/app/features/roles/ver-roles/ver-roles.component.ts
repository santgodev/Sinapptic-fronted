import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
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

  displayedColumns: string[] = ['ID_ROL', 'NOMBRE_ROL', 'DESCRIPCION','ACCIONES'];
  constructor(
    public rolService: RolService,
    private logger: NGXLogger,
    private titleService: Title,
    private matDialog: MatDialog,
    private SpinnerService: SpinnerService,
  ) { }
  
  ngOnInit() {
    this.titleService.setTitle('Sinapptic - Roles');
    this.logger.log('Users loaded');
    this.rolService.listarRoles().subscribe();
  }
  openUserFormModal() {
    this.matDialog.open(FormUserCreateComponent)
    this.SpinnerService.reset();

  }
  openRolFormModal() {
    this.matDialog.open(CrearRolesComponent)
    this.SpinnerService.reset();

  }
  removeRol(id:string){
    this.rolService.eliminarRol(id).subscribe();
  }
}

 


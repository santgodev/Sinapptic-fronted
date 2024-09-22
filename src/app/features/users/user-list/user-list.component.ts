import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Title } from '@angular/platform-browser';

import { NGXLogger } from 'ngx-logger';
import { FormUserCreateComponent } from '../form-user-create/form-user-create.component';
import { UserService } from 'src/app/core/services/user.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { CrearRolesComponent } from '../../roles/crear-roles/crear-roles.component';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['NOMBRE', 'CORREO', 'TELEFONO', 'ROL', 'ACCIONES', 'ID'];
  
  constructor(
    public usuarioService: UserService,
    private logger: NGXLogger,
    private titleService: Title,
    private matDialog: MatDialog,
    private SpinnerService: SpinnerService,
  ) { }


  ngOnInit() {
    this.titleService.setTitle('Sinapptic - Users');
    this.logger.log('Users loaded');
    this.usuarioService.listarUsuario().pipe(tap(()=>this.SpinnerService.reset())).subscribe()
  }
  openUserFormModal() {
    this.SpinnerService.reset();
    this.matDialog.open(FormUserCreateComponent)

  }

  removeUser(id:string){
    this.usuarioService.eliminarUsuario(id).subscribe()
    this.SpinnerService.reset()
  }
}


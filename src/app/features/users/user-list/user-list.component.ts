import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

import { NGXLogger } from 'ngx-logger';
import { empty, map, tap } from 'rxjs';
import { Usuario} from 'src/app/core/models/moduloModel';
import { NotificationService } from 'src/app/core/services/notification.service';
import { FormUserCreateComponent } from '../form-user-create/form-user-create.component';
import { UserService } from 'src/app/core/services/user.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

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
    private SpinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Sinapptic - Users');
    this.logger.log('Users loaded');
    this.usuarioService.listarUsuario().subscribe({next:()=>this.SpinnerService.reset()});
    this.usuarioService.usuarios$.subscribe()
  }
  openUserFormModal() {
    this.matDialog.open(FormUserCreateComponent)
    this.SpinnerService.reset();

  }
}


import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Actualizado
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { FormUserCreateComponent } from '../form-user-create/form-user-create.component';
import { UserService } from 'src/app/core/services/user.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
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
    private matDialog: MatDialog, // Actualizado
    private spinnerService: SpinnerService // Cambiado a camelCase
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Sinapptic - Users');
    this.logger.log('Users loaded');
    this.usuarioService.listarUsuario()
      .pipe(tap(() => this.spinnerService.reset())) // Cambiado a camelCase
      .subscribe();
  }

  openUserFormModal() {
    this.spinnerService.reset(); // Cambiado a camelCase
    this.matDialog.open(FormUserCreateComponent);
  }

  removeUser(id: string) {
    this.usuarioService.eliminarUsuario(id).subscribe();
    this.spinnerService.reset(); // Cambiado a camelCase
  }
}

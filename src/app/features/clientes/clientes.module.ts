import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { SharedModule } from "../../shared/shared.module";
import { ActivosComponent } from './activos/activos.component';
import { ActivoFormComponent } from './activo-form/activo-form.component'; // Importa ReactiveFormsModule
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { VerClientesComponent } from './ver-clientes/ver-clientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    ClienteFormComponent,
    ActivosComponent,
    ActivoFormComponent,
    VerClientesComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,
    ReactiveFormsModule

  ],
})
export class ClientesModule { }

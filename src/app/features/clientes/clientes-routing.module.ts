import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerClientesComponent } from './ver-clientes/ver-clientes.component';
import { ActivosComponent } from './activos/activos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  { path: '', component: VerClientesComponent },
  { path: 'activos', component: ActivosComponent },
  { path: 'usuarios', component: UsuariosComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }

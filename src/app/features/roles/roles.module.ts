import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { CrearRolesComponent } from './crear-roles/crear-roles.component';
import { VerRolesComponent } from './ver-roles/ver-roles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CrearRolesComponent, VerRolesComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RolesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table'; // Actualizado
import { FormUserCreateComponent } from './form-user-create/form-user-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    MatTableModule, // Actualizado
    ReactiveFormsModule
  ],
  declarations: [
    UserListComponent,
    FormUserCreateComponent
  ]
})
export class UsersModule { }

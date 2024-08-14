import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';

import { UserListComponent } from './user-list/user-list.component';
import { FormUserCreateComponent } from './form-user-create/form-user-create.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'formUser', component:FormUserCreateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

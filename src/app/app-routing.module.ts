import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './shared/layout/layout.component';

const appRoutes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'clientes',
        loadChildren: () => import('./features/clientes/clientes.module').then(m => m.ClientesModule),
      }, {
        path: 'roles',
        loadChildren: () => import('./features/roles/roles.module').then(m => m.RolesModule),
      },
      {
        path: 'ver_usuarios',
        loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'account',
        loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule),
      },
      {
        path: 'icons',
        loadChildren: () => import('./features/icons/icons.module').then(m => m.IconsModule),
      },
      {
        path: 'typography',
        loadChildren: () => import('./features/typography/typography.module').then(m => m.TypographyModule),
      },
      {
        path: 'about',
        loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
      },

    ]
  },

  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: []
})
export class AppRoutingModule { }

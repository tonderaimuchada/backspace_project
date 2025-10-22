// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestLayoutComponent } from './theme/layouts/guest-layout/guest-layout.component';
import { ProductComponent } from './demo/component/product/product.component';
import { DefaultComponent } from './demo/dashboard/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/dashboard/default/default.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'product',
        loadComponent: () => import('./demo/component/product/product.component').then((c) => c.ProductComponent)
      }
    ]
  },
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/pages/authentication/auth-login/auth-login.component').then((c) => c.AuthLoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./demo/pages/authentication/auth-register/auth-register.component').then((c) => c.AuthRegisterComponent)
      }
    ]
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'products/new', component: ProductComponent },
  { path: 'products/:id/edit', component: ProductComponent },

  { path: 'customers', component: DefaultComponent },
  { path: 'customers/new', component: DefaultComponent },
  { path: 'customers/:id/edit', component: DefaultComponent },
  { path: 'customers/:id/orders', component: DefaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

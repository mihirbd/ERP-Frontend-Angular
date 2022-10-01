import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErpLogComponent } from './components/erp-log/erp-log.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'erp-log', component: ErpLogComponent },
  { path: '', redirectTo: '/erp-log', pathMatch: 'full' },

  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule) },

  {
    path: 'accounts',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/accounts/accounts.module').then((m) => m.AccountsModule)
  },

  {
    path: 'inventory',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/inventory/inventory.module').then((m) => m.InventoryModule)
  },

  {
    path: 'hr',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/hr/hr.module').then((m) => m.HrModule)
  },

  {
    path: 'marketing',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/marketing/marketing.module').then((m) => m.MarketingModule)
  },

  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsDashboardComponent } from './components/accounts-dashboard/accounts-dashboard.component';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { AddPurposeComponent } from './components/add-purpose/add-purpose.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BalanceSheetComponent } from './components/balance-sheet/balance-sheet.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { DepositHistoryComponent } from './components/deposit-history/deposit-history.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { ExpenditureHistoryComponent } from './components/expenditure-history/expenditure-history.component';
import { ExpenditureComponent } from './components/expenditure/expenditure.component';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '', component: AccountsDashboardComponent, children: [
      { path: 'deposit', component: DepositComponent },
      { path: 'home', component: HomeComponent },
      { path: 'expenditure', component: ExpenditureComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'show-user', component: ShowUserComponent },
      { path: 'balance-sheet', component: BalanceSheetComponent },
      { path: 'add-bank', component: AddBankComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'company-info', component: CompanyInfoComponent },
      { path: 'add-purpose', component: AddPurposeComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'deposit-history', component: DepositHistoryComponent },
      { path: 'expenditure-history', component: ExpenditureHistoryComponent },
      { path: '', redirectTo: '/accounts/home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }

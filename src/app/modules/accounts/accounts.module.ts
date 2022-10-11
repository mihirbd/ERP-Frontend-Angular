import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsDashboardComponent } from './components/accounts-dashboard/accounts-dashboard.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { HomeComponent } from './components/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExpenditureComponent } from './components/expenditure/expenditure.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BalanceSheetComponent } from './components/balance-sheet/balance-sheet.component';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { ReportsComponent } from './components/reports/reports.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddPurposeComponent } from './components/add-purpose/add-purpose.component';
import { DepositHistoryComponent } from './components/deposit-history/deposit-history.component';
import { ExpenditureHistoryComponent } from './components/expenditure-history/expenditure-history.component';
import { DailyTransectionComponent } from './components/daily-transection/daily-transection.component';
import { WeeklyTransectionComponent } from './components/weekly-transection/weekly-transection.component';
import { MonthlyTransectionComponent } from './components/monthly-transection/monthly-transection.component';
import { YearlyTransectionComponent } from './components/yearly-transection/yearly-transection.component';
import { BankTransectionComponent } from './components/bank-transection/bank-transection.component';
@NgModule({
  declarations: [
    AccountsDashboardComponent,
    DepositComponent,
    HomeComponent,
    ExpenditureComponent,
    AddUserComponent,
    SettingsComponent,
    ShowUserComponent,
    BalanceSheetComponent,
    AddBankComponent,
    ReportsComponent,
    CompanyInfoComponent,
    UserListComponent,
    AddPurposeComponent,
    DepositHistoryComponent,
    ExpenditureHistoryComponent,
    DailyTransectionComponent,
    WeeklyTransectionComponent,
    MonthlyTransectionComponent,
    YearlyTransectionComponent,
    BankTransectionComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class AccountsModule { }

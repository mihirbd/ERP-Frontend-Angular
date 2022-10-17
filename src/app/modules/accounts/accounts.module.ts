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
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddSellerComponent } from './components/add-seller/add-seller.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { DepByEmpComponent } from './components/dep-by-emp/dep-by-emp.component';
import { DepositSortComponent } from './components/deposit-sort/deposit-sort.component';
import { ExpenditureSortComponent } from './components/expenditure-sort/expenditure-sort.component';
import { FixedCostComponent } from './components/fixed-cost/fixed-cost.component';
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
    BankTransectionComponent,
    AddEmployeeComponent,
    AddSellerComponent,
    ShowEmployeeComponent,
    DepByEmpComponent,
    DepositSortComponent,
    ExpenditureSortComponent,
    FixedCostComponent
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

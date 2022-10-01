import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EmployeeComponent } from './components/employee/employee.component';


@NgModule({
  declarations: [
    HrDashboardComponent,
    AddUserComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryDashboardComponent } from './components/inventory-dashboard/inventory-dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';


@NgModule({
  declarations: [
    InventoryDashboardComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }

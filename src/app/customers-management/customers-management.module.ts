import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/material.module';

import { CustomersManagementRoutingModule } from './customers-management-routing.module';
import { CustomersManagementComponent } from './component/customers-management/customers-management.component';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';
import { EditCustomerComponent } from './component/edit-customer/edit-customer.component';

@NgModule({
  declarations: [CustomersManagementComponent, AddCustomerComponent, EditCustomerComponent],
  imports: [CommonModule, MaterialModule, MatTableModule, CustomersManagementRoutingModule],
  exports: [CustomersManagementComponent, AddCustomerComponent, EditCustomerComponent],
})
export class CustomersManagementModule {}

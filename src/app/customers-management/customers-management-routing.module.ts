import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';
import { EditCustomerComponent } from './component/edit-customer/edit-customer.component';
import { CustomersManagementComponent } from './component/customers-management/customers-management.component';

const routes: Routes = [
  { path: '', component: CustomersManagementComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'edit', component: EditCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersManagementRoutingModule {}

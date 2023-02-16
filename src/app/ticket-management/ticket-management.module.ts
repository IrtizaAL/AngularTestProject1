import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/material.module';

import { TicketManagementRoutingModule } from './ticket-management-routing.module';
import { TicketManagementComponent } from './component/ticket-management/ticket-management.component';

@NgModule({
  declarations: [TicketManagementComponent],
  imports: [CommonModule, MatTableModule, MaterialModule, TicketManagementRoutingModule],
})
export class TicketManagementModule {}

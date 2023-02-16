import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '@app/material.module';
import { TableComponent } from './table/table.component';
import { DataComponent } from './data/data.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [DashboardComponent, TableComponent, DataComponent, ChartComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule],
  exports: [DashboardComponent, TableComponent],
})
export class DashboardModule {}

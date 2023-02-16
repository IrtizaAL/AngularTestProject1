import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/material.module';
import { MatCardModule } from '@angular/material/card';

import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TaskManagementComponent } from './component/task-management/task-management.component';

@NgModule({
  declarations: [TaskManagementComponent],
  imports: [CommonModule, MatCardModule, MatTableModule, MaterialModule, TaskManagementRoutingModule],
})
export class TaskManagementModule {}

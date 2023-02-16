import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/material.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './component/settings/settings.component';
import { FagsManagementComponent } from './component/fags-management/fags-management.component';
import { BadgesManagementComponent } from './component/badges-management/badges-management.component';

@NgModule({
  declarations: [SettingsComponent, FagsManagementComponent, BadgesManagementComponent],
  imports: [CommonModule, MatTableModule, MaterialModule, SettingsRoutingModule],
})
export class SettingsModule {}

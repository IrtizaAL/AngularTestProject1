import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesManagementComponent } from './component/badges-management/badges-management.component';
import { FagsManagementComponent } from './component/fags-management/fags-management.component';
import { SettingsComponent } from './component/settings/settings.component';

const routes: Routes = [
  { path: '', component: SettingsComponent, pathMatch: 'full' },
  { path: 'fag', component: FagsManagementComponent },
  { path: 'badge', component: BadgesManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}

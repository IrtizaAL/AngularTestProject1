import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryFormComponent } from './component/add-category-form/add-category-form.component';
import { AddSubCategoryFormComponent } from './component/add-sub-category-form/add-sub-category-form.component';
import { CategoryComponentComponent } from './component/category-component/category-component.component';

const routes: Routes = [
  { path: '', component: CategoryComponentComponent },
  { path: 'add-form', component: AddCategoryFormComponent },
  { path: 'add-sub-form', component: AddSubCategoryFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryManagementRoutingModule {}

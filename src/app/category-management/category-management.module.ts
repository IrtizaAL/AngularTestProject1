import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/material.module';

import { CategoryManagementRoutingModule } from './category-management-routing.module';
import { CategoryComponentComponent } from './component/category-component/category-component.component';
import { SubCategoryComponent } from './component/sub-category/sub-category.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { AddCategoryFormComponent } from './component/add-category-form/add-category-form.component';
import { AddSubCategoryFormComponent } from './component/add-sub-category-form/add-sub-category-form.component';

@NgModule({
  declarations: [
    CategoryComponentComponent,
    SubCategoryComponent,
    AddCategoryComponent,
    AddCategoryFormComponent,
    AddSubCategoryFormComponent,
  ],
  imports: [CommonModule, MaterialModule, MatTableModule, CategoryManagementRoutingModule],
  exports: [CategoryComponentComponent],
})
export class CategoryManagementModule {}

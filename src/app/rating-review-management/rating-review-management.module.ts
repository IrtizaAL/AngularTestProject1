import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/material.module';

import { RatingReviewManagementRoutingModule } from './rating-review-management-routing.module';
import { RatingReviewManagementComponent } from './component/rating-review-management/rating-review-management.component';

@NgModule({
  declarations: [RatingReviewManagementComponent],
  imports: [CommonModule, MatTableModule, MaterialModule, RatingReviewManagementRoutingModule],
})
export class RatingReviewManagementModule {}

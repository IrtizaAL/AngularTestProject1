import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingReviewManagementComponent } from './component/rating-review-management/rating-review-management.component';

const routes: Routes = [{ path: '', component: RatingReviewManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingReviewManagementRoutingModule {}

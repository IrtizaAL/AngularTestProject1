import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingReviewManagementComponent } from './rating-review-management.component';

describe('RatingReviewManagementComponent', () => {
  let component: RatingReviewManagementComponent;
  let fixture: ComponentFixture<RatingReviewManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingReviewManagementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingReviewManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

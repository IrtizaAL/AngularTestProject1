import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubCategoryFormComponent } from './add-sub-category-form.component';

describe('AddSubCategoryFormComponent', () => {
  let component: AddSubCategoryFormComponent;
  let fixture: ComponentFixture<AddSubCategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSubCategoryFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

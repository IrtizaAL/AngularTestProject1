import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FagsManagementComponent } from './fags-management.component';

describe('FagsManagementComponent', () => {
  let component: FagsManagementComponent;
  let fixture: ComponentFixture<FagsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FagsManagementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FagsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

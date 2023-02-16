import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesManagementComponent } from './badges-management.component';

describe('BadgesManagementComponent', () => {
  let component: BadgesManagementComponent;
  let fixture: ComponentFixture<BadgesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgesManagementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

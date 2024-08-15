import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesViewVolunteerComponent } from './employees-view-volunteer.component';

describe('EmployeesViewVolunteerComponent', () => {
  let component: EmployeesViewVolunteerComponent;
  let fixture: ComponentFixture<EmployeesViewVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesViewVolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesViewVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

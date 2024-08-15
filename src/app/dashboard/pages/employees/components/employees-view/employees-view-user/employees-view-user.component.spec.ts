import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesViewUserComponent } from './employees-view-user.component';

describe('EmployeesViewUserComponent', () => {
  let component: EmployeesViewUserComponent;
  let fixture: ComponentFixture<EmployeesViewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesViewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

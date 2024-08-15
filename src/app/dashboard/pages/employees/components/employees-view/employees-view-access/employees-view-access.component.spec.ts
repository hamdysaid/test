import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesViewAccessComponent } from './employees-view-access.component';

describe('EmployeesViewAccessComponent', () => {
  let component: EmployeesViewAccessComponent;
  let fixture: ComponentFixture<EmployeesViewAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesViewAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesViewAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

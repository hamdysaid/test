import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesFilterComponent } from './employees-filter.component';

describe('EmployeesFilterComponent', () => {
  let component: EmployeesFilterComponent;
  let fixture: ComponentFixture<EmployeesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

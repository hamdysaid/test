import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListFilterComponent } from './employees-list-filter.component';

describe('EmployeesListFilterComponent', () => {
  let component: EmployeesListFilterComponent;
  let fixture: ComponentFixture<EmployeesListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesListFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

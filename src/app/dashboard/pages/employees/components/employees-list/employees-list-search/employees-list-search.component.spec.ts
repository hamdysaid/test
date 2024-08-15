import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListSearchComponent } from './employees-list-search.component';

describe('EmployeesListSearchComponent', () => {
  let component: EmployeesListSearchComponent;
  let fixture: ComponentFixture<EmployeesListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesListSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

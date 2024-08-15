import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesViewPageComponent } from './employees-view-page.component';

describe('EmployeesViewPageComponent', () => {
  let component: EmployeesViewPageComponent;
  let fixture: ComponentFixture<EmployeesViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

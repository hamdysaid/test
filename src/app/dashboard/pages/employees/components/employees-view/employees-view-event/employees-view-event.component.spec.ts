import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesViewEventComponent } from './employees-view-event.component';

describe('EmployeesViewEventComponent', () => {
  let component: EmployeesViewEventComponent;
  let fixture: ComponentFixture<EmployeesViewEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesViewEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesViewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

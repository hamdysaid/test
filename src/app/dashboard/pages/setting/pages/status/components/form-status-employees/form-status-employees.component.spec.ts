import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStatusEmployeesComponent } from './form-status-employees.component';

describe('FormStatusEmployeesComponent', () => {
  let component: FormStatusEmployeesComponent;
  let fixture: ComponentFixture<FormStatusEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStatusEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStatusEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

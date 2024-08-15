import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesViewBoxsComponent } from './employees-view-boxs.component';

describe('EmployeesViewBoxsComponent', () => {
  let component: EmployeesViewBoxsComponent;
  let fixture: ComponentFixture<EmployeesViewBoxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesViewBoxsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesViewBoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

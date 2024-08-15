import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesViewAgendaComponent } from './employees-view-agenda.component';

describe('EmployeesViewAgendaComponent', () => {
  let component: EmployeesViewAgendaComponent;
  let fixture: ComponentFixture<EmployeesViewAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesViewAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesViewAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

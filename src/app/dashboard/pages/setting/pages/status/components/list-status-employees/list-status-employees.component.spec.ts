import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatusEmployeesComponent } from './list-status-employees.component';

describe('ListStatusEmployeesComponent', () => {
  let component: ListStatusEmployeesComponent;
  let fixture: ComponentFixture<ListStatusEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatusEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatusEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

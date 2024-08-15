import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEmployeesPageComponent } from './report-employees-page.component';

describe('ReportEmployeesPageComponent', () => {
  let component: ReportEmployeesPageComponent;
  let fixture: ComponentFixture<ReportEmployeesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportEmployeesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEmployeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

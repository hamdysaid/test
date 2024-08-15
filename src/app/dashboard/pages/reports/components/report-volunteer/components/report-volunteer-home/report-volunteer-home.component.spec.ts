import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVolunteerHomeComponent } from './report-volunteer-home.component';

describe('ReportVolunteerHomeComponent', () => {
  let component: ReportVolunteerHomeComponent;
  let fixture: ComponentFixture<ReportVolunteerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportVolunteerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportVolunteerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

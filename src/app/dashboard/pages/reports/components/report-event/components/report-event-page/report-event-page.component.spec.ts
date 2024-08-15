import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEventPageComponent } from './report-event-page.component';

describe('ReportEventPageComponent', () => {
  let component: ReportEventPageComponent;
  let fixture: ComponentFixture<ReportEventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportEventPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

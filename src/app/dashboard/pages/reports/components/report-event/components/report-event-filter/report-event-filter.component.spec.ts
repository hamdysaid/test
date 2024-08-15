import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEventFilterComponent } from './report-event-filter.component';

describe('ReportEventFilterComponent', () => {
  let component: ReportEventFilterComponent;
  let fixture: ComponentFixture<ReportEventFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportEventFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEventFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

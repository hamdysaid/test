import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEventTableComponent } from './report-event-table.component';

describe('ReportEventTableComponent', () => {
  let component: ReportEventTableComponent;
  let fixture: ComponentFixture<ReportEventTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportEventTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEventTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

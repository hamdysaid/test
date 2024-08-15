import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEventSearchComponent } from './report-event-search.component';

describe('ReportEventSearchComponent', () => {
  let component: ReportEventSearchComponent;
  let fixture: ComponentFixture<ReportEventSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportEventSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEventSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

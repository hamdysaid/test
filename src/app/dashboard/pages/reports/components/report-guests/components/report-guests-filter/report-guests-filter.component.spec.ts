import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGuestsFilterComponent } from './report-guests-filter.component';

describe('ReportGuestsFilterComponent', () => {
  let component: ReportGuestsFilterComponent;
  let fixture: ComponentFixture<ReportGuestsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGuestsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGuestsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

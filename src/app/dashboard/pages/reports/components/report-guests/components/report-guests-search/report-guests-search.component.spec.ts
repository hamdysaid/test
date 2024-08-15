import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGuestsSearchComponent } from './report-guests-search.component';

describe('ReportGuestsSearchComponent', () => {
  let component: ReportGuestsSearchComponent;
  let fixture: ComponentFixture<ReportGuestsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGuestsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGuestsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

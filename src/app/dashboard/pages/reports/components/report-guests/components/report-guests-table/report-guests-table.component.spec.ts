import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGuestsTableComponent } from './report-guests-table.component';

describe('ReportGuestsTableComponent', () => {
  let component: ReportGuestsTableComponent;
  let fixture: ComponentFixture<ReportGuestsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGuestsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGuestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

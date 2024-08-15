import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGuestsPageComponent } from './report-guests-page.component';

describe('ReportGuestsPageComponent', () => {
  let component: ReportGuestsPageComponent;
  let fixture: ComponentFixture<ReportGuestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGuestsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGuestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

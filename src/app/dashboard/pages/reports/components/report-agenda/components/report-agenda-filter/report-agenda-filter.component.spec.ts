import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAgendaFilterComponent } from './report-agenda-filter.component';

describe('ReportAgendaFilterComponent', () => {
  let component: ReportAgendaFilterComponent;
  let fixture: ComponentFixture<ReportAgendaFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAgendaFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportAgendaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

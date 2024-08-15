import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAgendaTableComponent } from './report-agenda-table.component';

describe('ReportAgendaTableComponent', () => {
  let component: ReportAgendaTableComponent;
  let fixture: ComponentFixture<ReportAgendaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAgendaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportAgendaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

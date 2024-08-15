import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAgendaSearchComponent } from './report-agenda-search.component';

describe('ReportAgendaSearchComponent', () => {
  let component: ReportAgendaSearchComponent;
  let fixture: ComponentFixture<ReportAgendaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAgendaSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportAgendaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

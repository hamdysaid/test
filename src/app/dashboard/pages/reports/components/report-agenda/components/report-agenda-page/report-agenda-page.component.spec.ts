import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAgendaPageComponent } from './report-agenda-page.component';

describe('ReportAgendaPageComponent', () => {
  let component: ReportAgendaPageComponent;
  let fixture: ComponentFixture<ReportAgendaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAgendaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportAgendaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventScheduleFormComponent } from './event-schedule-form.component';

describe('EventScheduleFormComponent', () => {
  let component: EventScheduleFormComponent;
  let fixture: ComponentFixture<EventScheduleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventScheduleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventScheduleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

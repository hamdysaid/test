import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewScheduleComponent } from './event-view-schedule.component';

describe('EventViewScheduleComponent', () => {
  let component: EventViewScheduleComponent;
  let fixture: ComponentFixture<EventViewScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventViewScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventViewScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

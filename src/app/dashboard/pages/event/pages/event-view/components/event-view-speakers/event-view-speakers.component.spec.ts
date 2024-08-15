import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewSpeakersComponent } from './event-view-speakers.component';

describe('EventViewSpeakersComponent', () => {
  let component: EventViewSpeakersComponent;
  let fixture: ComponentFixture<EventViewSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventViewSpeakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventViewSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

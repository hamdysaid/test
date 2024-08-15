import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSpeakerFormComponent } from './event-speaker-form.component';

describe('EventSpeakerFormComponent', () => {
  let component: EventSpeakerFormComponent;
  let fixture: ComponentFixture<EventSpeakerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSpeakerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSpeakerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

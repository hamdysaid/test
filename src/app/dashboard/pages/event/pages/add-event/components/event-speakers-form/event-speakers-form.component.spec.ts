import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSpeakersFormComponent } from './event-speakers-form.component';

describe('EventSpeakersFormComponent', () => {
  let component: EventSpeakersFormComponent;
  let fixture: ComponentFixture<EventSpeakersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSpeakersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSpeakersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

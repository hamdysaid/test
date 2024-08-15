import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewSponsorsComponent } from './event-view-sponsors.component';

describe('EventViewSponsorsComponent', () => {
  let component: EventViewSponsorsComponent;
  let fixture: ComponentFixture<EventViewSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventViewSponsorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventViewSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

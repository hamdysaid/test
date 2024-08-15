import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewDataComponent } from './event-view-data.component';

describe('EventViewDataComponent', () => {
  let component: EventViewDataComponent;
  let fixture: ComponentFixture<EventViewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventViewDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

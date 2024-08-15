import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSponsorsFormComponent } from './event-sponsors-form.component';

describe('EventSponsorsFormComponent', () => {
  let component: EventSponsorsFormComponent;
  let fixture: ComponentFixture<EventSponsorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSponsorsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSponsorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

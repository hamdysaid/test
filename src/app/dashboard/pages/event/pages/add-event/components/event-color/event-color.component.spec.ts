import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventColorComponent } from './event-color.component';

describe('EventColorComponent', () => {
  let component: EventColorComponent;
  let fixture: ComponentFixture<EventColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

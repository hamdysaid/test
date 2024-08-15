import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHallViewComponent } from './EventHallView.component';

describe('DesignComponent', () => {
  let component: EventHallViewComponent;
  let fixture: ComponentFixture<EventHallViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventHallViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventHallViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

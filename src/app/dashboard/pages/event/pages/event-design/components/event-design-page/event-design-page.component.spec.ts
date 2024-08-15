import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDesignPageComponent } from './event-design-page.component';

describe('EventDesignPageComponent', () => {
  let component: EventDesignPageComponent;
  let fixture: ComponentFixture<EventDesignPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDesignPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDesignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

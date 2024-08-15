import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDesignUpdateComponent } from './event-design-update.component';

describe('EventDesignUpdateComponent', () => {
  let component: EventDesignUpdateComponent;
  let fixture: ComponentFixture<EventDesignUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDesignUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDesignUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

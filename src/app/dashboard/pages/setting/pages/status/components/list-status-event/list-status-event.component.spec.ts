import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatusEventComponent } from './list-status-event.component';

describe('ListStatusEventComponent', () => {
  let component: ListStatusEventComponent;
  let fixture: ComponentFixture<ListStatusEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatusEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatusEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatusGuestsComponent } from './list-status-guests.component';

describe('ListStatusGuestsComponent', () => {
  let component: ListStatusGuestsComponent;
  let fixture: ComponentFixture<ListStatusGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatusGuestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatusGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

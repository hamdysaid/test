import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStatusGuestsComponent } from './form-status-guests.component';

describe('FormStatusGuestsComponent', () => {
  let component: FormStatusGuestsComponent;
  let fixture: ComponentFixture<FormStatusGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStatusGuestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStatusGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

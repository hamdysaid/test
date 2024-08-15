import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStatusEventComponent } from './form-status-event.component';

describe('FormStatusEventComponent', () => {
  let component: FormStatusEventComponent;
  let fixture: ComponentFixture<FormStatusEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStatusEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStatusEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

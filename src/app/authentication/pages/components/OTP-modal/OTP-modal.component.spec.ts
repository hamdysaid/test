/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OTPModalComponent } from './OTP-modal.component';

describe('OTPModalComponent', () => {
  let component: OTPModalComponent;
  let fixture: ComponentFixture<OTPModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OTPModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OTPModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

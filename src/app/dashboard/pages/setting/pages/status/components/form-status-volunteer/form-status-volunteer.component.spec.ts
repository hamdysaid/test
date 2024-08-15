import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStatusVolunteerComponent } from './form-status-volunteer.component';

describe('FormStatusVolunteerComponent', () => {
  let component: FormStatusVolunteerComponent;
  let fixture: ComponentFixture<FormStatusVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStatusVolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStatusVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

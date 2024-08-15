import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerInvtationsPageComponent } from './volunteer-invtations-page.component';

describe('VolunteerInvtationsPageComponent', () => {
  let component: VolunteerInvtationsPageComponent;
  let fixture: ComponentFixture<VolunteerInvtationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerInvtationsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerInvtationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

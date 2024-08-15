import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerViewPageComponent } from './volunteer-view-page.component';

describe('VolunteerViewPageComponent', () => {
  let component: VolunteerViewPageComponent;
  let fixture: ComponentFixture<VolunteerViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

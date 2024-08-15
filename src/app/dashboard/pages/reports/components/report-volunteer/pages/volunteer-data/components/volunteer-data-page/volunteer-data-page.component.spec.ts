import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDataPageComponent } from './volunteer-data-page.component';

describe('VolunteerDataPageComponent', () => {
  let component: VolunteerDataPageComponent;
  let fixture: ComponentFixture<VolunteerDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

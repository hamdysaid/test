import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDataFilterComponent } from './volunteer-data-filter.component';

describe('VolunteerDataFilterComponent', () => {
  let component: VolunteerDataFilterComponent;
  let fixture: ComponentFixture<VolunteerDataFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerDataFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerDataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

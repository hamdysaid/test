import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerViewFilterComponent } from './volunteer-view-filter.component';

describe('VolunteerViewFilterComponent', () => {
  let component: VolunteerViewFilterComponent;
  let fixture: ComponentFixture<VolunteerViewFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerViewFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerViewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerListFilterComponent } from './volunteer-list-filter.component';

describe('VolunteerListFilterComponent', () => {
  let component: VolunteerListFilterComponent;
  let fixture: ComponentFixture<VolunteerListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerListFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

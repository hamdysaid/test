import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDataSearchComponent } from './volunteer-data-search.component';

describe('VolunteerDataSearchComponent', () => {
  let component: VolunteerDataSearchComponent;
  let fixture: ComponentFixture<VolunteerDataSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerDataSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerDataSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

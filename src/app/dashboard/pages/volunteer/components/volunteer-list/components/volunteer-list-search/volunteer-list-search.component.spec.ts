import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerListSearchComponent } from './volunteer-list-search.component';

describe('VolunteerListSearchComponent', () => {
  let component: VolunteerListSearchComponent;
  let fixture: ComponentFixture<VolunteerListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerListSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

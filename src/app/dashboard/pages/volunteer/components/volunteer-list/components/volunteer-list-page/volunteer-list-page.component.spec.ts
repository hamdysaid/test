import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerListPageComponent } from './volunteer-list-page.component';

describe('VolunteerListPageComponent', () => {
  let component: VolunteerListPageComponent;
  let fixture: ComponentFixture<VolunteerListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

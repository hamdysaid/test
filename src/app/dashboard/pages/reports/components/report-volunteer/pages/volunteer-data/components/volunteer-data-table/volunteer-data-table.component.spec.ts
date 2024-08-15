import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDataTableComponent } from './volunteer-data-table.component';

describe('VolunteerDataTableComponent', () => {
  let component: VolunteerDataTableComponent;
  let fixture: ComponentFixture<VolunteerDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

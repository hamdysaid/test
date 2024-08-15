import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerListTableComponent } from './volunteer-list-table.component';

describe('VolunteerListTableComponent', () => {
  let component: VolunteerListTableComponent;
  let fixture: ComponentFixture<VolunteerListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

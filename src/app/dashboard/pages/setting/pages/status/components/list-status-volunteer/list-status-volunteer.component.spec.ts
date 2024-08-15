import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatusVolunteerComponent } from './list-status-volunteer.component';

describe('ListStatusVolunteerComponent', () => {
  let component: ListStatusVolunteerComponent;
  let fixture: ComponentFixture<ListStatusVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatusVolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatusVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

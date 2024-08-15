import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerViewBoxComponent } from './volunteer-view-box.component';

describe('VolunteerViewBoxComponent', () => {
  let component: VolunteerViewBoxComponent;
  let fixture: ComponentFixture<VolunteerViewBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerViewBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerViewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

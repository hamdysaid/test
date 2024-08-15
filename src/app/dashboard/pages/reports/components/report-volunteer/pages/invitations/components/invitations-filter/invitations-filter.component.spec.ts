import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationsFilterComponent } from './invitations-filter.component';

describe('InvitationsFilterComponent', () => {
  let component: InvitationsFilterComponent;
  let fixture: ComponentFixture<InvitationsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitationsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

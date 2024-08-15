import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationsTableComponent } from './invitations-table.component';

describe('InvitationsTableComponent', () => {
  let component: InvitationsTableComponent;
  let fixture: ComponentFixture<InvitationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

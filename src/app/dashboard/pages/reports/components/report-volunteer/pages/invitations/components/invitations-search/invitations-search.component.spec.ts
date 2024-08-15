import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationsSearchComponent } from './invitations-search.component';

describe('InvitationsSearchComponent', () => {
  let component: InvitationsSearchComponent;
  let fixture: ComponentFixture<InvitationsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitationsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

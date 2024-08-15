import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvtationsSearchComponent } from './invtations-search.component';

describe('InvtationsSearchComponent', () => {
  let component: InvtationsSearchComponent;
  let fixture: ComponentFixture<InvtationsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvtationsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvtationsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

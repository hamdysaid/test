import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvtationsFilterComponent } from './invtations-filter.component';

describe('InvtationsFilterComponent', () => {
  let component: InvtationsFilterComponent;
  let fixture: ComponentFixture<InvtationsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvtationsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvtationsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

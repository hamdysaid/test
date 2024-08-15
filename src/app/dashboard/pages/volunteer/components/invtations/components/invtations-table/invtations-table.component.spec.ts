import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvtationsTableComponent } from './invtations-table.component';

describe('InvtationsTableComponent', () => {
  let component: InvtationsTableComponent;
  let fixture: ComponentFixture<InvtationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvtationsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvtationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

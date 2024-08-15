import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvtationsPageComponent } from './invtations-page.component';

describe('InvtationsPageComponent', () => {
  let component: InvtationsPageComponent;
  let fixture: ComponentFixture<InvtationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvtationsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvtationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreePageComponent } from './degree-page.component';

describe('DegreePageComponent', () => {
  let component: DegreePageComponent;
  let fixture: ComponentFixture<DegreePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

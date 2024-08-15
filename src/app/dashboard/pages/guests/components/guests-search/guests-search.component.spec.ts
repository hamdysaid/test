import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsSearchComponent } from './guests-search.component';

describe('GuestsSearchComponent', () => {
  let component: GuestsSearchComponent;
  let fixture: ComponentFixture<GuestsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

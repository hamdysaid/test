import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoxsComponent } from './home-boxs.component';

describe('HomeBoxsComponent', () => {
  let component: HomeBoxsComponent;
  let fixture: ComponentFixture<HomeBoxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBoxsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

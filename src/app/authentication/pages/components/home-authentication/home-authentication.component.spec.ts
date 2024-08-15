import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAuthenticationComponent } from './home-authentication.component';

describe('HomeAuthenticationComponent', () => {
  let component: HomeAuthenticationComponent;
  let fixture: ComponentFixture<HomeAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

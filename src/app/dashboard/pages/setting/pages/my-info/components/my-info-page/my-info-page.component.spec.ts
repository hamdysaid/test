import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInfoPageComponent } from './my-info-page.component';

describe('MyInfoPageComponent', () => {
  let component: MyInfoPageComponent;
  let fixture: ComponentFixture<MyInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

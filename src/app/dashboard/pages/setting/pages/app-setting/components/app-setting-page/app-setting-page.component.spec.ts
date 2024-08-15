import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSettingPageComponent } from './app-setting-page.component';

describe('AppSettingPageComponent', () => {
  let component: AppSettingPageComponent;
  let fixture: ComponentFixture<AppSettingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSettingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

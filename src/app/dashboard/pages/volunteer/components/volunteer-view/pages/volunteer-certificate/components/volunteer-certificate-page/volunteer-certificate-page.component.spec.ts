import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerCertificatePageComponent } from './volunteer-certificate-page.component';

describe('VolunteerCertificatePageComponent', () => {
  let component: VolunteerCertificatePageComponent;
  let fixture: ComponentFixture<VolunteerCertificatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerCertificatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerCertificatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

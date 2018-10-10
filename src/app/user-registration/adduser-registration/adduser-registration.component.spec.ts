import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserRegistrationComponent } from './adduser-registration.component';

describe('AdduserRegistrationComponent', () => {
  let component: AdduserRegistrationComponent;
  let fixture: ComponentFixture<AdduserRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

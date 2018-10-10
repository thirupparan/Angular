import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserRegistrationComponent } from './viewuser-registration.component';

describe('ViewuserRegistrationComponent', () => {
  let component: ViewuserRegistrationComponent;
  let fixture: ComponentFixture<ViewuserRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

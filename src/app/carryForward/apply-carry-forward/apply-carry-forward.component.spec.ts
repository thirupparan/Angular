import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCarryForwardComponent } from './apply-carry-forward.component';

describe('ApplyCarryForwardComponent', () => {
  let component: ApplyCarryForwardComponent;
  let fixture: ComponentFixture<ApplyCarryForwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyCarryForwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCarryForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

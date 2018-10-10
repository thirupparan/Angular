import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelLeaveRequestComponent } from './cancel-leave-request.component';

describe('CancelLeaveRequestComponent', () => {
  let component: CancelLeaveRequestComponent;
  let fixture: ComponentFixture<CancelLeaveRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelLeaveRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

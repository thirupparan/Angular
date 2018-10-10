import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessLeaveRequestComponent } from './process-leave-request.component';

describe('ProcessLeaveRequestComponent', () => {
  let component: ProcessLeaveRequestComponent;
  let fixture: ComponentFixture<ProcessLeaveRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessLeaveRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

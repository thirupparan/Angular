import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveStatisticsComponent } from './leave-statistics.component';

describe('LeaveStatisticsComponent', () => {
  let component: LeaveStatisticsComponent;
  let fixture: ComponentFixture<LeaveStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

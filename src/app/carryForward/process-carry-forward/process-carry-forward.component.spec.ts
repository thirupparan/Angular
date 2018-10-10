import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCarryForwardComponent } from './process-carry-forward.component';

describe('ProcessCarryForwardComponent', () => {
  let component: ProcessCarryForwardComponent;
  let fixture: ComponentFixture<ProcessCarryForwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessCarryForwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessCarryForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

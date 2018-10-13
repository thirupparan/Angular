import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePrevilagesComponent } from './manage-previlages.component';

describe('ManagePrevilagesComponent', () => {
  let component: ManagePrevilagesComponent;
  let fixture: ComponentFixture<ManagePrevilagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePrevilagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePrevilagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

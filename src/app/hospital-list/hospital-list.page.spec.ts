import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalListPage } from './hospital-list.page';

describe('HospitalListPage', () => {
  let component: HospitalListPage;
  let fixture: ComponentFixture<HospitalListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalTimeComponent } from './hospital-time.component';

describe('HospitalTimeComponent', () => {
  let component: HospitalTimeComponent;
  let fixture: ComponentFixture<HospitalTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

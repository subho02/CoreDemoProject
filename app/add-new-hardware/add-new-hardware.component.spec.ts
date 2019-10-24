import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHardwareComponent } from './add-new-hardware.component';

describe('AddNewHardwareComponent', () => {
  let component: AddNewHardwareComponent;
  let fixture: ComponentFixture<AddNewHardwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewHardwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

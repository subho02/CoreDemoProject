import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllHardwareListComponent } from './get-all-hardware-list.component';

describe('GetAllHardwareListComponent', () => {
  let component: GetAllHardwareListComponent;
  let fixture: ComponentFixture<GetAllHardwareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllHardwareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllHardwareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

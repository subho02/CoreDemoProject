import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-hardware',
  templateUrl: './add-new-hardware.component.html',
  styleUrls: ['./add-new-hardware.component.css']
})
export class AddNewHardwareComponent implements OnInit {
  @Output() HardwareAdded = new EventEmitter<any>();
  @Input() HWInfo: any;
  public buttonText = 'Save';
  constructor() { 
    this.clearHWData();
  }

  ngOnInit() {
  }
  private clearHWData = function() {    
    this.HWInfo = {
      HardwareID: undefined,
      HardwareName: '',
      HardwareDescription: '',
      HardwareCategory: '',
      HardwareVendor:''
    };
  };

  public addHW = function(event) {
    this.HardwareAdded.emit(this.HWInfo);
    this.clearHWData();
  };
}

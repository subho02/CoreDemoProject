import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-all-hardware-list',
  templateUrl: './get-all-hardware-list.component.html',
  styleUrls: ['./get-all-hardware-list.component.css']
})
export class GetAllHardwareListComponent implements OnInit {  
  @Output() newClicked = new EventEmitter<any>();
  @Input() hardwareData: Array<any>;
  constructor() { }

  ngOnInit() {
  }
  public newRecord() {
    this.newClicked.emit();
  }
}

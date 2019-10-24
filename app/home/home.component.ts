import { Component, OnInit } from '@angular/core';
import { AddHardwareService } from '../add-hardware.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hardwareData: Array<any>;
  public currentHardwareItem: any;
  constructor(private hardwareService: AddHardwareService) { 
    hardwareService.get().subscribe((data: any) => this.hardwareData = data);
    this.currentHardwareItem  = this.initializeHWItem();
  }

  ngOnInit() {
  }

  private initializeHWItem(){
    return{
      HardwareID: undefined,
      HardwareName: '',
      HardwareDescription: '',
      HardwareCategory: '',
      HardwareVendor:''
    };
  }

  public addNewHardware = function(hardwareItem: any) {
  {
    this.hardwareService.add(hardwareItem).subscribe(
      data=>this.hardwareData.push(hardwareItem)
    );
  }
  }

  public newClicked = function() {
    this.currentHardwareItem = this.initializeHWItem();
  };
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GetAllHardwareListComponent } from './get-all-hardware-list/get-all-hardware-list.component';
import { AddNewHardwareComponent } from './add-new-hardware/add-new-hardware.component';
import { RouterModule, Routes } from '@angular/router';
import { AddHardwareService } from './add-hardware.service';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';
const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetAllHardwareListComponent,
    AddNewHardwareComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AddHardwareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelComponent} from './hotel.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HotelRoutingModule} from './hotel_routing.module';
import {HotelDetailComponent} from './hotel.detail.component';
import {HotelListComponent} from './hotel.list.component';
import {HotelService} from './hotel.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HotelRoutingModule
  ],
  declarations: [
    HotelComponent,
    HotelDetailComponent,
    HotelListComponent
  ],
  providers: [
    HotelService
  ]
})
export class HotelModule {
}

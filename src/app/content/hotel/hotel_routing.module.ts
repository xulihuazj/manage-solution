import {Router, RouterModule, Routes} from '@angular/router';
import {HotelComponent} from './hotel.component';
import {NgModule} from '@angular/core';
import {HotelDetailComponent} from './hotel.detail.component';
import {HotelListComponent} from './hotel.list.component';

export const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HotelComponent,
      },
      {
        path: 'hotel/:id',
        component: HotelDetailComponent
      },
      {
        path: 'list',
        component: HotelListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HotelRoutingModule {

}

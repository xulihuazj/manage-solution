import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Hotel} from './hotel';
import {Observable} from 'rxjs/Observable';
import {HotelService} from './hotel.service';


@Injectable()
// 导航前预先加载路由信息
export class HotelDetailResolver implements Resolve<Hotel> {

  constructor(private hotelService: HotelService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hotel> | Promise<Hotel> | Hotel {
    const id = route.paramMap.get('id');
    return this.hotelService.getHotelDetail(id).then(hotel => {
      if (hotel) {
        return hotel;
      } else {
        this.router.navigate(['/hotel-detail']);
      }
    });
  }
}

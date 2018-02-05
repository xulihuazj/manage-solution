import {Component, HostBinding, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HotelService} from './hotel.service';
import {Hotel} from './hotel';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-hotel-detail',
  template: `
    <h1>房详情</h1>
  `
})
export class HotelDetailComponent implements OnInit {
  // 传给了第一个@HostBinding的'@routeAnimation'匹配了slideInDownAnimation触发器的名字routeAnimation
  // 把routeAnimation属性设置为true，因为我们只关心:enter和:leave这两个状态。
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  private hotel$: Observable<any>;

  constructor(private activateRoute: ActivatedRoute,
              private router: Router,
              private hotelService: HotelService) {
  }

  // 用ActivatedRoute服务来接收路由的参数，从参数中取得该房源的id，并接收此房源用于显示。
  ngOnInit(): void {
    this.hotel$ = this.activateRoute.paramMap
      .switchMap((params: ParamMap) =>
        this.hotelService.getHotelDetail(params.get('id')));
  }


}

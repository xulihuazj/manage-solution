import {Component, OnInit} from '@angular/core';
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

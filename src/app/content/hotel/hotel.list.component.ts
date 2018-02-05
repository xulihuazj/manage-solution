import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Hotel} from './hotel';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {HotelService} from './hotel.service';


@Component({
  selector: 'app-hotel-list',
  template: `
    <h1>房源列表</h1>
    <ul class="items">
      <li *ngFor="let hotel of hotels$ | async" [class.selected]="selectedId===hotel.id">
        <a [routerLink]="['/hotel',hotel.id]">
          <span class="badge">{{hotel.id}}</span>{{hotel.name}}
        </a>
      </li>
    </ul>
    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class HotelListComponent implements OnInit {

  hotels$: Observable<Hotel[]>;

  selectedId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private hotelService: HotelService) {
  }

  ngOnInit(): void {
    this.hotels$ = this.activatedRoute.paramMap.switchMap((params: ParamMap) => {
      this.selectedId = +params.get('id');
      return this.hotelService.getHotelList();
    });
  }


}

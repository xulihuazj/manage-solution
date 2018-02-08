import {Component, OnInit} from '@angular/core';
import {getDate} from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
// 用于UI布局 侧滑
export class SidebarComponent implements OnInit {

  /*定义成员变量*/
  today = 'day';

  constructor() {
  }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`;
  }

}

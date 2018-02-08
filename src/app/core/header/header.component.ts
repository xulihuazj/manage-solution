import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// 用于UI布局 顶部
export class HeaderComponent implements OnInit {

  /*TODO*/
  @Output() toggle = new EventEmitter<void>();

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    // svg 加入注册表
    // svg 加入注册表
    iconRegistry.addSvgIcon('gifts', sanitizer.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
  }

  ngOnInit() {
  }

  /*打开侧边栏*/
  openSidebar() {
    this.toggle.emit();
  }

}

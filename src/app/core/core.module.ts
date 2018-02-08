import {NgModule, SkipSelf, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MdToolbarModule, MdIcoModule, MdButtonModule} from '@angular/meterial';
import {HttpModule} from '@angular/http';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {loadSvgResource} from '../utils/svg.util';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';

// 建立核心模块(适合只加载一次的组件或服务)
@NgModule({
  imports: [
    HttpModule,
    // 导入共享模块
    SharedModule,
    // 导入动画模块
    BrowserAnimationsModule,
    // 导入angular meterial 模块
    MdToolbarModule,
    MdIcoModule,
    MdButtonModule,
  ],
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
  ]
})
export class CoreModule {

  // 初始化CoreModule时，SkipSelf 让构造器去系统父级去寻找依赖, Optional
  constructor(@Optional() @SkipSelf() parent: CoreModule,
              iconRegistry: MdIconRegistry,
              sanitizer: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载');
    }
    loadSvgResource(iconRegistry, sanitizer);
  }
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MdSidenavModule} from '@angular/material';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {PageComponent} from './page/page.component';
import {HotelModule} from './content/hotel/hotel.module';
import {Router} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModule} from './login/login.module';
import {ValidationComponent} from './form/validation/validation.component';
import {CoreModule} from './core/core.module';


// @NgModule装饰器用来为模块定义元数据。
@NgModule({
  /*只能声明组件、指令和管道*/
  declarations: [
    // 导入根组件
    AppComponent,
    ValidationComponent,
    // 404 跳转页面
    PageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // 导入根路由
    AppRoutingModule,
    // 导入CoreModule
    CoreModule,
    // 导入Angular meterial
    MdSidenavModule,
  ],
  // 只能声明服务
  providers: [],
  // 以什么组件作为启动项、声明模块的主组件
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, 2));
  }
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {PageComponent} from './page/page.component';
import {HotelModule} from './content/hotel/hotel.module';


// @NgModule装饰器用来为模块定义元数据。
@NgModule({
  declarations: [
    // 导入根组件
    AppComponent,
    HotelModule,
    // 导入根路由
    AppRoutingModule,
    // 404 跳转页面
    PageComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
  ],
  // 需要的 service
  providers: [],
  // 以什么组件作为启动项
  bootstrap: [AppComponent]
})
export class AppModule {
}

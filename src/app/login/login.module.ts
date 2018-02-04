import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginInfo} from './login';
import {LoginService} from './login.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  // 声明哪些组件、指令、管道属于该模块。
  declarations: [LoginComponent],
  // 导入其它模块，从其它模块中获得本模块所需的组件、指令和管道。
  imports: [
    CommonModule,
    HttpClientModule
  ],
  // 公开某些类，以便其它的组件模板可以使用它们。
  exports: [LoginInfo],
  // 在应用程序级提供服务，以便应用中的任何组件都能使用它。
  providers: [LoginService]
})
export class LoginModule {
}

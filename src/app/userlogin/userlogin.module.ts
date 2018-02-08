import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserLoginComponent} from './login/login.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // 导入字模块路由
    UserloginModule,
  ],
  declarations: [UserLoginComponent]
})
export class UserloginModule {
}

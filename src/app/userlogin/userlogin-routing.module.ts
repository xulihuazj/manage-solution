/*建立自路由*/
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserLoginComponent} from './login/login.component';

const router: Routes = [
  {
    path: 'userlogin',
    component: UserLoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(router)
  ],
  exports: [
    RouterModule
  ]
})
export class UserloginRoutingModule {
}

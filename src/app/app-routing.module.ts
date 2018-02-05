import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  // 空路径（''）表示应用的默认路径，当URL为空时就会访问那里，因此它通常会作为起点。 这个默认路由会重定向到URL /heroes，并显示HeroesListComponent。
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'crisis',
    loadChildren: 'app/crisis/crisis.module#CrisisModule'
  },
  {
    path: 'heroes',
    loadChildren: 'app/hero/hero.module#HeroModule'
  },
  // { // 如果没有匹配到任何路由，跳转到分404 组件
  //   path: '**',
  //   component: 'app/page/page.module#PageModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // 用于调试
    {enableTracing: true})],
  exports: [RouterModule]
})
// 根路由模块
export class AppRoutingModule {
}

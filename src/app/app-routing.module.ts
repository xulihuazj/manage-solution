import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './guard/auth.guard';
import {SelectivePreloadingStrategy} from './strategy/selective.preloading.strategy';

export const routes: Routes = [
  // 空路径（''）表示应用的默认路径，当URL为空时就会访问那里，因此它通常会作为起点。 这个默认路由会重定向到URL /heroes，并显示HeroesListComponent。
  {
    path: '',
    redirectTo: 'userlogin',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: 'app/login/login.module#LoginModule',
        // 惰性加载路由配置
        data: {preload: true}
      },
      /* {
         path: '',
         loadChildren: 'app/',
       }*/
    ]
  },
  // { // 如果没有匹配到任何路由，跳转到分404 组件
  //   path: '**',
  //   component: 'app/page/page.module#PageModule'
  // }
  // {
  //   path: 'crisis',
  //   // 惰性加载路由配置
  //   loadChildren: 'app/crisis/crisis.module#CrisisModule'
  // },
  // {
  //   path: 'heroes',
  //   // 惰性加载路由配置
  //   loadChildren: 'app/hero/hero.module#HeroModule',
  //   canLoad: [AuthGuard]
  // },
  // { // 如果没有匹配到任何路由，跳转到分404 组件
  //   path: '**',
  //   component: 'app/page/page.module#PageModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true, // 用于调试
      preloadingStrategy: PreloadAllModules // 这会让Router预加载器立即加载所有惰性加载路由（带loadChildren属性的路由）。
    }),
    // 自定义预加载策略
    //SelectivePreloadingStrategy
  ],
  exports: [RouterModule],
  providers: [
    //SelectivePreloadingStrategy
  ]
})
// 根路由模块
export class AppRoutingModule {
}

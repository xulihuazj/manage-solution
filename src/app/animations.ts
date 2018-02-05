// 自定义动画
import {AnimationEntryMetadata} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

// 导出了一个名叫slideInDownAnimation的常量，并把它设置为一个名叫*routeAnimation的动画触发器。带动画的组件将会引用这个名字。
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    // 指定了一个通配符状态 —— *，它匹配该路由组件存在时的任何动画状态。
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    // 定义两个过渡效果，其中一个（:enter）在组件进入应用视图时让它从屏幕左侧缓动进入（ease-in），另一个（:leave）在组件离开应用视图时让它向下飞出。
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);

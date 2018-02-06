import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

  // CanLoad守卫：保护对特性模块的未授权加载
  // 添加一个CanLoad守卫，它只在用户已登录并且尝试访问管理特性区的时候，才加载AdminModule一次。
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    const url = `/${route.path}`;
    //return this.checkLogin(url);
    return true;
  }

}

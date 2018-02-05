import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  // 获取当前头信息
  public getHttpHeaders(): HttpHeaders {
    // 判断token是否过期
    if (!this.tokenIsExpired()) {
      this.setExpireTime();
    } else {
      this.router.navigateByUrl('login');
    }
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': localStorage.getItem('token')
    });
  }

  public tokenIsExpired(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return true;
    }
    const isExpired = parseInt(localStorage.getItem('expires_at'), 0) - Date.now();
    return isExpired > 0 ? false : true;
  }

  // 设置token过期时间
  public setExpireTime(): void {
    const expireAt = JSON.stringify((30 * 60 * 1000) + Date.now());
    localStorage.setItem('expires_at', expireAt);
  }

  // 清除过期的token
  public clearTokenByExpired() {
    localStorage.removeItem('token');
    localStorage.setItem('expires_at', '0');
    this.router.navigateByUrl('login');
  }

}

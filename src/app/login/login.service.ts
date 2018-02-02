import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import {LoginInfo} from './login';

@Injectable()
export class LoginService {

  // 用户登录地址
  private loginUrl = `${environment.api.admin}account/login`;
  // 验证码获取地址
  private verifyCodeUrl = `${environment.api.admin}verification/getcode`;
  // 邮件发送地址
  private sendEmailUrl = `${environment.api.admin}account/sendmail`;
  // 验证码校验地址
  private verifyUrl = `${environment.api.admin}verification/codeValidator`;
  // 重置密码地址
  private resetPwdUrl = `${environment.api.admin}account/passwordrevise`;

  constructor(
    private http: Http) {}

    // 获取用户token（登录凭证）
    getUserToken(loginInfo: LoginInfo){

    }
}

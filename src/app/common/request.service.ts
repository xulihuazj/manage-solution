import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {SourceService} from './source.service';
import {Source} from './source';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RequestService {

  constructor(private router: Router,
              private httpClient: HttpClient,
              private sourceService: SourceService,
              private authService: AuthService) {
  }

  private handleError(exception: any): Promise<any> {
    return Promise.reject(exception);
  }

  // 被授权的Get请求方式
  authorizedGet(url: string, queryData?: any): Promise<any> {
    const sourceType = this.sourceService.getSourceType();
    let requestData;
    if (sourceType) {
      requestData = Object.assign(requestData, sourceType);
    }
    if (queryData) {
      requestData = Object.assign(requestData, sourceType);
    }
    let returnResult: any = null;
    const responseResult = this.httpClient.get<any>(url, JSON.parse(requestData));
    // 处理响应
    responseResult.subscribe((response) => {
      returnResult = response;
      const status_code = returnResult.json().status_code;
      if (status_code === '50014011') {
        this.authService.clearTokenByExpired();
      } else if (status_code === '200') {
        returnResult = returnResult.json().biz_response;
      } else {
        return this.handleError(response);
      }
    });
    return returnResult;
  }

  // 被授权的POST 请求方式
  authorizedPost(requestUrl: string, queryData?: any, sourceType?: any): Promise<any> {
    const source = this.sourceService.getSourceType();
    const requestData = {biz_request: queryData};
    if (source) {
      Object.assign(source, sourceType);
    }
    if (queryData) {
      Object.assign(requestData, source);
    } else {
      return;
    }
    ;
    let returnResult: any = null;
    const response = this.httpClient.post(requestUrl, requestData);
    // 处理响应
    response.subscribe(result => {
      returnResult = result;
      const status_code = returnResult.json().status_code;
      if (status_code === '50014011') {
        this.authService.clearTokenByExpired();
      } else if (status_code === '200') {
        returnResult = returnResult.json().biz_response;
      } else {
        return this.handleError(returnResult);
      }
    });
    return returnResult;
  }

  // 无需授权Get请求
  commonGet(requestUrl: string, queryData?: any): Promise<any> {
    const sourceType = this.sourceService.getSourceType();
    let requestData;
    if (queryData) {
      requestData = Object.assign(sourceType, queryData);
    } else {
      requestData = sourceType;
    }
    let returnResult: any = null;
    const response = this.httpClient.get(requestUrl, JSON.parse(requestData));
    response.subscribe(result => {
      returnResult = result;
      if (returnResult.json().status_code === '200') {
        returnResult = returnResult.json().biz_response;
      } else {
        return this.handleError(result);
      }
    });
    return returnResult;
  }

  // 无需授权POST请求
  commonPost(requestUrl: string, queryDat?: any): Promise<any> {
    const sourceType = this.sourceService.getSourceType();
    const reqData = {biz_request: queryDat};
    if (queryDat) {
      Object.assign(reqData, sourceType);
    } else {
      return;
    }
    let returnResult: any = null;
    this.httpClient.post(requestUrl, reqData)
      .subscribe(response => {
        returnResult = response;
        if (returnResult.json().status_code === '200') {
          returnResult = returnResult.json().biz_response;
        } else {
          return this.handleError(response);
        }
      });
    return returnResult;
  }
}




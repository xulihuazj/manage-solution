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

  authGet(url: string, queryData?: any, sourceType?: any): Promise<any> {
    let requestData = this.sourceService.getSourceType();
    if (sourceType) {
      Object.assign(requestData, sourceType);
    }
    if (queryData) {
      requestData = Object.assign(requestData, sourceType);
    }
    const responseResult = this.httpClient.get<any>(url, /*{params: requestData, headers: this.authService.getHeaders()}*/);
    // 处理响应
    return responseResult.subscribe((response) => {
      const status_code = response.json().status_code;
      if (status_code === '50014011') {
        this.authService.clearTokenByExpired();
      } else if (status_code === '200') {
        return response.json().biz_response;
      } else {
        return this.handleError(response);
      }
    }).catch(exception => {
      this.handleError(exception.json());
    });
  }

  authPost(requestUrl: string, queryData?: any, sourceType?: any): Promise<any> {
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
    // const requestHeader: Observable<any> = {
    //   headers: this.authService.getHttpHeaders(),
    //   responseType: 'json'
    // };
    const responseResult = this.httpClient.post(requestUrl, requestData);
    // 处理响应
    return responseResult.subscribe((result) => {
        const status_code = result.json().status_code;
        if (status_code === '50014011') {
          this.authService.clearTokenByExpired();
        } else if (status_code === '200') {
          return result.json().biz_response;
        } else {
          return this.handleError();
        }
      },
      response => {
        console.log('');
      }).catch(exception => {
      this.handleError(exception.json());
    });
  }


}

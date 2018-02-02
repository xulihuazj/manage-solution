import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {SourceService} from './source.service';
import {Source} from './source';

@Injectable()
export class RequestService {

  constructor(private router: Router,
              private httpService: Http,
              private sourceService: SourceService,
              private authService: AuthService) {
  }

  authGet(url: string, queryData?: any, sourceType?: any): Promise<any> {
    let requestData = this.sourceService.getSourceType();
    if (sourceType) {
      Object.assign(requestData, sourceType);
    }
    if (queryData) {
      requestData = Object.assign(requestData, sourceType);
    }
    const resource = this.httpService.get(url,{params: requestData,headers: this.authService.getHeaders()});



    return null;
  }

}

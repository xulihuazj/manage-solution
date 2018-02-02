import {Injectable} from '@angular/core';
import {Source} from './source';

// 登录来源服务
@Injectable()
export class SourceService {

  constructor() {
  }

  // 获取本地定义的Source
  public getSourceType(): Source {
    const source: Source = {
        language: localStorage.getItem('lang') === 'zh' ? 'ZH_CN' : 'EN_US',
        source: 'WEB'
      }
    ;
    return source;
  }

}

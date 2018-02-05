import {Injectable} from '@angular/core';

@Injectable()
export class HotelService {

  constructor() {
  }

  // 通过ID获取房源信息
  getHotelDetail(id: string | null): Promise<any> {
    return null;
  }

  // 获取房源列表
  getHotelList() {
    return null;
  }
}

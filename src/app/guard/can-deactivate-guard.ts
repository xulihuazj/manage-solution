import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';

export interface CanComponentDeactivateGuard {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivateGuard> {
  canDeactivate(component: CanComponentDeactivateGuard) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

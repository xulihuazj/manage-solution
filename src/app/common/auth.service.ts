import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) {}

  public setToken(token: string): void {
    localStorage.setItem('token', token);


  }


}

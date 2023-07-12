import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const mytoken = token ? JSON.parse(token) : null;
    const accesstoken = mytoken ? mytoken.access_token : null;
console.log(accesstoken);
    const isAuthenticated = accesstoken !== null;

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

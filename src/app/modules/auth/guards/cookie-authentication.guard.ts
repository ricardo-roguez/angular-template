import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class CookieAuthenticationGuard implements CanActivate {
  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {

    const cookie = this.cookieService.get('VoxelIntranetCookie');

    if (cookie) {
      return true;
    }

    this.router.navigate([AppConfig.routes.unauthorized]);

    return false;
  }

}

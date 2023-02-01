import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    const canActivateSubject = new Subject<boolean>();

    // Timeout to simulate a call to back. If condition is false navigate to login/unauthorized page
    setTimeout(() => {
      if (false) {
        this.navigateToUnauthorized();
      }
      canActivateSubject.next(true);
    }, 200)

    return canActivateSubject;
  }

  private navigateToUnauthorized(): void {
    this.router.navigate([AppConfig.routes.unauthorized]);
  }

}

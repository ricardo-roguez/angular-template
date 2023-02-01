import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationGuard } from './authentication-guard.service';
import { Error401Component } from '../components/error401/error401.component';
import { AppConfig } from '../../../config/app.config';

describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;
  let cookieService: CookieService;
  let router: Router;

  const url = 'asdsads'
  const fakeRoute = {} as ActivatedRouteSnapshot
  const fakeRouterState = { url } as RouterStateSnapshot

  beforeEach(() => {
    TestBed.configureTestingModule({ imports:[RouterTestingModule.withRoutes([{ path: AppConfig.routes.unauthorized, component: Error401Component }])] });
    guard = TestBed.inject(AuthenticationGuard);
    cookieService = TestBed.inject(CookieService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should have access by default', fakeAsync (() => {
    guard.canActivate(fakeRoute, fakeRouterState).subscribe((data: boolean) => expect(data).toBeTruthy());
    flush();
  }));
});

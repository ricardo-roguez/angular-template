import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { CookieAuthenticationGuard } from './cookie-authentication.guard';
import { Error401Component } from '../components/error401/error401.component';
import { AppConfig } from '../../../config/app.config';

describe('CookieAuthenticationGuard', () => {
  let guard: CookieAuthenticationGuard;
  let cookieService: CookieService;
  let router: Router;

  const url = 'asdsads'
  const fakeRoute = {} as ActivatedRouteSnapshot
  const fakeRouterState = { url } as RouterStateSnapshot

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([{ path: AppConfig.routes.unauthorized, component: Error401Component }])]
    });
    guard = TestBed.inject(CookieAuthenticationGuard);
    cookieService = TestBed.inject(CookieService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should have access when cookie exists', () =>{
    spyOn(cookieService, 'get').and.returnValue('mi cookie');

    const hasAccess = guard.canActivate(fakeRoute, fakeRouterState);

    expect(hasAccess).toBe(true);
  })

  it('should not have access when cookie not exists', () =>{
    const hasAccess = guard.canActivate(fakeRoute, fakeRouterState);

    expect(hasAccess).toBe(false);
  })

  it('should read a cookie', () =>{
    spyOn(cookieService, 'get');

    guard.canActivate(fakeRoute, fakeRouterState);

    expect(cookieService.get).toHaveBeenCalledOnceWith('VoxelIntranetCookie');
  })


});

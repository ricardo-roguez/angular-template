import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageGuard } from './language.guard';
import { LanguageService } from '../services/language.service';
import { ConfigService } from '../../config/services/config.service';

describe('LanguageGuard', () => {
  let guard: LanguageGuard;
  let configService: ConfigService;
  const url = 'asdsads'
  const fakeRoute = {} as ActivatedRouteSnapshot
  const fakeRouterState = { url } as RouterStateSnapshot
  const languageServiceMock = jasmine.createSpyObj('LanguageService', ['setLanguage', 'changeLanguage']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        { provide: LanguageService, useValue: languageServiceMock }
      ]
    });
    guard = TestBed.inject(LanguageGuard);
    configService = TestBed.inject(ConfigService);
    languageServiceMock.canTranslate = new BehaviorSubject(true);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('when canTranslate is false should set the language', fakeAsync(() => {
    languageServiceMock.canTranslate.next(false);
    guard.canActivate(fakeRoute, fakeRouterState);
    flush();
    expect(languageServiceMock.setLanguage).toHaveBeenCalledWith(configService.defaultLang);
    expect(languageServiceMock.changeLanguage).toHaveBeenCalledWith(configService.defaultLang);
  }));

  it('when canTranslate is false should set the language', fakeAsync(() => {
    languageServiceMock.canTranslate.next(true);
    flush();
    const result = guard.canActivate(fakeRoute, fakeRouterState) as Observable<boolean>;
    flush();
    expect(languageServiceMock.setLanguage).toHaveBeenCalledWith(configService.defaultLang);
    result.subscribe(data => expect(data).toBeTruthy());
    flush();
    const newResult = guard.canActivate(fakeRoute, fakeRouterState);
    expect(newResult).toBe(true);
  }));


});

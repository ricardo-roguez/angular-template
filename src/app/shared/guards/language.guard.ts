import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LanguageService } from '../services/language.service';
import { ConfigService } from '../../config/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {

  private canTranslate = false;
  constructor(
    private languageService: LanguageService,
    private configService: ConfigService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const canActivateSubject = new Subject<boolean>();

    if (this.canTranslate) {
      return true;
    }

    this.languageService.setLanguage(this.configService.defaultLang);
    this.languageService.changeLanguage(this.configService.defaultLang);

    this.languageService.canTranslate
      .subscribe((data: boolean) => {
        this.canTranslate = data;
        canActivateSubject.next(data);
      })

    return canActivateSubject.asObservable();
  }
}

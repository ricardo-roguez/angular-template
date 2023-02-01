import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  canTranslate = new BehaviorSubject<boolean>(false);
  constructor(private translateService: TranslateService) {
    this.translateService.onDefaultLangChange
      .subscribe(() => this.canTranslate.next(true));
  }

  setLanguage(language: string): void {
    this.translateService.setDefaultLang(language);
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}

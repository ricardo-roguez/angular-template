import { TestBed } from '@angular/core/testing';
import { DefaultLangChangeEvent, TranslateService } from '@ngx-translate/core';

import { LanguageService } from './language.service';
import { TestHelper } from '../test/test-helper';

describe('LanguageService', () => {
  let service: LanguageService;
  let translateService: TranslateService;
  const testHelper: TestHelper = new TestHelper();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [testHelper.imports],
      providers: [ TranslateService ]
    });
    service = TestBed.inject(LanguageService);
    translateService = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call to translate service setDefaultLang when set the language', () => {
    spyOn(translateService, 'setDefaultLang');
    service.setLanguage('es-ES');
    expect(translateService.setDefaultLang).toHaveBeenCalledWith('es-ES');
  });

  it('should call to translate service use when change the language', () => {
    spyOn(translateService, 'use');
    service.changeLanguage('es-ES');
    expect(translateService.use).toHaveBeenCalledWith('es-ES');
  });

  it('should update the canTranslateValue when the default lang has changed', () => {
    translateService.onDefaultLangChange.next({} as DefaultLangChangeEvent);
    service.canTranslate.subscribe(data => expect(data).toBeTruthy());
  });
});

import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

  public static routes = {
    unauthorized: '401',
    functionalityOne: 'functionality-one'
  }
}

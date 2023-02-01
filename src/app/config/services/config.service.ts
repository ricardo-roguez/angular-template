import { Injectable } from '@angular/core';
import { AppConfigUrlInterface } from '../interfaces/app-config-url.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public url: AppConfigUrlInterface = {
    api: ''
  }
}

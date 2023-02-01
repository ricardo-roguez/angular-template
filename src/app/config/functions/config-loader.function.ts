import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigService } from '../services/config.service';

export function ConfigLoaderFunction(httpClient: HttpClient, config: ConfigService): () => Observable<ConfigService> {
  return () => httpClient.get<ConfigService>(`./configFiles/${environment.configFile}.json`)
    .pipe(
      tap((configResponse: ConfigService) => {
        config.url.api = configResponse.url.api;
      })
    );
}

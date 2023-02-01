import { Component } from '@angular/core';
import { ConfigService } from '../../../../config/services/config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-error401',
  templateUrl: './error401.component.html',
  styleUrls: ['./error401.component.scss']
})
export class Error401Component {

  constructor(
    private configService: ConfigService,
    private translateService: TranslateService
  ) {
    console.log(this.translateService.instant('unauthorized.initSession'))
  }

}

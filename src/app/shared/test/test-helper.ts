import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';

export class TestHelper {
  public constructor() {}

  public get imports(): any[] {
    return [
      ButtonModule,
      RouterTestingModule,
      ToastModule,
      ConfirmDialogModule,
      RouterTestingModule.withRoutes([], { enableTracing: true }),
      TranslateModule.forRoot(),
    ];
  }
}

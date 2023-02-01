import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfigLoaderFunction } from './config/functions/config-loader.function';
import { ConfigService } from './config/services/config.service';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    HttpClientModule,

    // PrimeNg
    ConfirmDialogModule,
    DynamicDialogModule,
    ToastModule,

    // App
    AppRoutingModule,
    AuthModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoaderFunction,
      deps: [HttpClient, ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

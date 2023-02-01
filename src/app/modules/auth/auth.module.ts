import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error401Component } from './components/error401/error401.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    Error401Component
  ],
    imports: [
      CommonModule,
      ButtonModule,
      TranslateModule
    ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Error401Component } from './components/error401/error401.component';


@NgModule({
  declarations: [
    Error401Component
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class AuthModule { }

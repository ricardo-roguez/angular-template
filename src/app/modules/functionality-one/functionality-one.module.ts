import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FunctionalityOneMainComponent } from './components/functionality-one/functionality-one-main.component';
import { FunctionalityOneRoutingModule } from './functionality-one-routing.module';

@NgModule({
  declarations: [
    FunctionalityOneMainComponent
  ],
  imports: [
    CommonModule,
    FunctionalityOneRoutingModule,

    // NgPrime
    ButtonModule
  ]
})
export class FunctionalityOneModule { }

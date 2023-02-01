import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FunctionalityOneMainComponent } from './components/functionality-one/functionality-one-main.component';
import { FunctionalityOneRoutingModule } from './functionality-one-routing.module';

@NgModule({
  declarations: [
    FunctionalityOneMainComponent
  ],
    imports: [
      CommonModule,
      FunctionalityOneRoutingModule,
      TranslateModule
    ]
})
export class FunctionalityOneModule { }

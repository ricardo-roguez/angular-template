import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalityOneMainComponent } from './components/functionality-one/functionality-one-main.component';


const routes: Routes = [
  {
    path: '',
    component: FunctionalityOneMainComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionalityOneRoutingModule {}

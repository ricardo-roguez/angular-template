import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error401Component } from './modules/auth/components/error401/error401.component';
import { AuthenticationGuard } from './modules/auth/guards/authentication-guard.service';
import { AppConfig } from './config/app.config';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: AppConfig.routes.functionalityOne,
      canActivate: [AuthenticationGuard],
      loadChildren: () => import('./modules/functionality-one/functionality-one.module').then(module => module.FunctionalityOneModule)
    },
    { path: AppConfig.routes.unauthorized, component: Error401Component },
    { path: '**', redirectTo: AppConfig.routes.functionalityOne, pathMatch: 'full' }
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

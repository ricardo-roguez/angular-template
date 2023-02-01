import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error401Component } from './modules/auth/components/error401/error401.component';
import { AppConfig } from './config/app.config';
import { LanguageGuard } from './shared/guards/language.guard';
import { AuthenticationGuard } from './modules/auth/guards/authentication-guard.service';

const routes: Routes = [{
  path: '',
  canActivate: [LanguageGuard],
  children: [
    {
      path: AppConfig.routes.functionalityOne,
      canActivate: [AuthenticationGuard],
      loadChildren: () => import('./modules/functionality-one/functionality-one.module').then(module => module.FunctionalityOneModule)
    },
    {
      path: AppConfig.routes.unauthorized,
      canActivate: [LanguageGuard],
      component: Error401Component
    },
    { path: '**', redirectTo: AppConfig.routes.functionalityOne, pathMatch: 'full' }
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

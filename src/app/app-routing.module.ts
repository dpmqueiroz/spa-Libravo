import { ViewHomeComponent } from './viewComponent/view-home/view-home.component';
import { AppComponent } from './app.component';
import { ViewAdministradorComponent } from './viewComponent/view-administrador/view-administrador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLoginComponent } from './viewComponent/view-login/view-login.component';

const routes: Routes = [
  {path:'', component: ViewHomeComponent},
  {path:'login', component: ViewLoginComponent},
  {path:'administracao', component: ViewAdministradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

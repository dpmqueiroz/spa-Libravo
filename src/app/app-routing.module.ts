import { ViewAdministratorEditComponent } from './viewComponent/view-administrator-edit/view-administrator-edit.component';
import { ViewHomeComponent } from './viewComponent/view-home/view-home.component';
import { AppComponent } from './app.component';
import { ViewAdministradorComponent } from './viewComponent/view-administrador/view-administrador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLoginComponent } from './viewComponent/view-login/view-login.component';

const routes: Routes = [
  {path:'', component: ViewHomeComponent},
  {path:'login', component: ViewLoginComponent},
  {path:'administracao', component: ViewAdministradorComponent},
  {path:'administracao/usuario/edit/:id', component: ViewAdministratorEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

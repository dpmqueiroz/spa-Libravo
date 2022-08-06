import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLoginComponent } from './viewComponent/view-login/view-login.component';
import { ViewAdministradorComponent } from './viewComponent/view-administrador/view-administrador.component';
import { ViewHomeComponent } from './viewComponent/view-home/view-home.component';
import { NavBarComponent } from './sharedComponents/nav-bar/nav-bar.component';
import { BotaoGoogleComponent } from './sharedComponents/botao-google/botao-google.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabelaComponent } from './sharedComponents/tabela-listar-usuarios/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TabelaUsuarioEditComponent } from './sharedComponents/tabela-usuario-edit/tabela-usuario-edit.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAdministratorEditComponent } from './viewComponent/view-administrator-edit/view-administrator-edit.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TabelaPermissoesListarComponent } from './sharedComponents/tabela-permissoes-listar/tabela-permissoes-listar.component';






@NgModule({
  declarations: [
    AppComponent,
    ViewLoginComponent,
    ViewAdministradorComponent,
    ViewHomeComponent,
    NavBarComponent,
    BotaoGoogleComponent,
    TabelaComponent,
    TabelaUsuarioEditComponent,
    ViewAdministratorEditComponent,
    TabelaPermissoesListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

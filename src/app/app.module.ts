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
import { TabelaComponent } from './sharedComponents/tabela/tabela.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    ViewLoginComponent,
    ViewAdministradorComponent,
    ViewHomeComponent,
    NavBarComponent,
    BotaoGoogleComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

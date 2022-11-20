import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EmpleadosService } from './services/empleados.service';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HomeEmpleadosComponent } from './components/home-empleados/home-empleados.component';
import { SubordinadosComponent } from './components/subordinados/subordinados.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    EmpleadosComponent,
    HomeEmpleadosComponent,
    SubordinadosComponent,
    PerfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

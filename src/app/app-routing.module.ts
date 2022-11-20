import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HomeEmpleadosComponent } from './components/home-empleados/home-empleados.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { SubordinadosComponent } from './components/subordinados/subordinados.component';

const homeRoutes: Routes = [
  {path:"", component:HomeEmpleadosComponent},
  {path:"empleados", component:EmpleadosComponent},
  {path:"perfiles", component:PerfilesComponent},
  {path:"subordinados", component:SubordinadosComponent},
  {path:"**", component:HomeEmpleadosComponent}
]

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"apiempleados", component: HomeComponent, children: homeRoutes},
  {path:"**", component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

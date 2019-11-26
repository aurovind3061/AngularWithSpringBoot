import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeesComponent } from './employees/employees.component';
import { LogoutComponent } from './logout/logout.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login', component:LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent},
  {path:'employees',component:ListEmployeesComponent},
  {path:'logout',component:LogoutComponent},
  {path : 'employees/:id', component : EmployeesComponent},
  {path:'**', component:ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

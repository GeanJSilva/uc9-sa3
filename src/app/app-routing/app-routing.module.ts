import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from "../views/login/login.component";

//regras para chamar a pagina quando clicar no menu:

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})




export class AppRoutingModule { }

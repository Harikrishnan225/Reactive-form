import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxmodelComponent } from './boxmodel/boxmodel.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { SignupComponent } from './students/signup/signup.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'boxmodel',
  component: BoxmodelComponent
},
{
  path: 'page',
  component: PageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

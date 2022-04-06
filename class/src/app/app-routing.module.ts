import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{
  path: 'learn',
  component: LearnComponent
},
{
path: 'test',
component: TestComponent
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

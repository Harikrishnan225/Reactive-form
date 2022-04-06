import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './students/signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { BoxmodelComponent } from './boxmodel/boxmodel.component';
import { BoxComponent } from './box/box.component';
import { PageComponent } from './page/page.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    BoxmodelComponent,
    BoxComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

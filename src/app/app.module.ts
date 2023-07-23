import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { LoginButtonComponent } from './login-button/login-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CredentialsComponent,
    LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

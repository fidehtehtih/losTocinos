import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './components/login-user/login-user.component';

import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from './service/servicios.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

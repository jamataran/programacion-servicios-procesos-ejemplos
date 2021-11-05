import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ComponentsModule} from "./components/components.module";
import {ServicesModule} from "./services/services.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LogHttpInterceptor} from "./interceptors/http.interceptor";
import {AuthHttpInterceptor} from "./interceptors/auth-http.interceptor";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
    HttpClientModule,
    ServicesModule,
    RouterModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LogHttpInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

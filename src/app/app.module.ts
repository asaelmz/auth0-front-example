import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
// Import the injector module and the HTTP client module from Angular
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { apiService } from './service/api.services';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    AccessDeniedComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-bulg11md.us.auth0.com',
      clientId: 'PgIW2K5KWMuGzyfvZmwPbnPT2dhhvo0X',
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
      scope: 'read:messages',
      audience: 'https://auth0test/api',
      httpInterceptor: {
        allowedList: [
          {
            uri: 'http://localhost:8080/api/private',
            tokenOptions: {
              audience: 'https://auth0test/api'
            },
          },
          {
            uri: 'http://localhost:8080/api/private-scoped',
            tokenOptions: {
              audience: 'https://auth0test/api',
              scope: 'read:messages'
            },
          }
        ],
      },
    }),
    MatToolbarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    apiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

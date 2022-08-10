import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth0-example';

  constructor(
    public auth: AuthService
  ){}

  loginWithRedirect(){
    this.auth.loginWithPopup();
  }

  logOut(){
    this.auth.logout();
  }
}

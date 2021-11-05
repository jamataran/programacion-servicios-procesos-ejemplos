import {Component} from '@angular/core';
import {LoginModel} from "./model/login.model";
import {LoginServiceService} from "./services/login-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'programacion-servicios-procesos-ejemplos';
  user: LoginModel | null;

  constructor(private login: LoginServiceService) {
    this.user = login.loginValue();
    login.login.subscribe(l => this.user = l);

  }

  logout(): void {
    this.login.performLogout();
    this.user = null;
  }

}

import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {LoginModel} from "../model/login.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  /**
   * BehaviorSubject al igual que cualquier otro Subject es tanto un Observable como un Observador. Llevándolo a concreto, significa que te puedes suscribir al igual que con un Observable normal pero además expone los métodos next, error y complete , y los puedes llamar de forma imperativa en cualquier parte de tu código.
   * Al llamar a cualquiera de estos métodos, todo suscriptor que esté suscrito al Subject va a ser notificado.
   *
   * Porque así impides que cualquier componente al que le hayas inyectado el servicio interactúe directamente con el Subject
   * y envíe mensajes por otro medio que no sea la API pública que define tu servicio.
   * @private
   */
  private loginModelBehaviorSubject: BehaviorSubject<LoginModel | null>
  public login: Observable<LoginModel | null>;

  constructor(private router: Router, private http: HttpClient) {
    this.loginModelBehaviorSubject = new BehaviorSubject<LoginModel | null>(JSON.parse(<string>localStorage?.getItem('login')));
    this.login = this.loginModelBehaviorSubject.asObservable();
  }

  performLogin(inLogin: LoginModel): Observable<LoginModel> {
    return this
      .http
      .post<LoginModel>('https://reqres.in/api/login', inLogin)
      .pipe(map(uresponse => {
        console.log('"*** LOGIN RESPONSE ***')
        console.log(JSON.stringify(uresponse));
        console.log('"**********************')
          this.loginModelBehaviorSubject.next(uresponse);
          localStorage.setItem('login', JSON.stringify(uresponse));
          return uresponse;
        }
      ));
  }

  performLogout(): void {
    localStorage.removeItem('login');
    this.loginModelBehaviorSubject.next(null);
    this.router.navigate(['/login']);
  }

  loginValue(): LoginModel | null {
    return this.loginModelBehaviorSubject?.value;
  }

}

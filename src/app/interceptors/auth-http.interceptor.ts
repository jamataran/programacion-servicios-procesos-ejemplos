import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginServiceService} from "../services/login-service.service";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private loginSrv: LoginServiceService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let loginValue = this.loginSrv.loginValue();
    let token = loginValue?.token;

    if (loginValue && token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Basic: ' + token
        }
      })
    } else {
      console.log('La peticion no requiere autorización');
    }

    return next.handle(request);
  }
}

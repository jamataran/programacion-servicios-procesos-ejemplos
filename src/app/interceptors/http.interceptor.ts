import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from "rxjs/operators";

@Injectable()
export class LogHttpInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();
    let status: string;

    return next.handle(req).pipe(
      tap(
        event => {
          status = '';
          if (event instanceof HttpResponse) {
            status = 'succeeded';
          }
        },
        error => status = 'failed'
      ),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const message = req.method + " " + req.urlWithParams + " " + status
          + " in " + elapsedTime + "ms";

        this.logDetails(message);
      })
    );
  }

  private logDetails(msg: string) {
    console.log(msg);
  }
}

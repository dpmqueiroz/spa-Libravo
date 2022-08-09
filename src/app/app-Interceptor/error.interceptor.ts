import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(catchError(err => {


      console.log("Passei pelo Interceptor sem o IF")
      if(err.status == 401 || err.status == 403 || err.status == 204){
        console.log("Passei pelo Interceptor")
      }

      return throwError(err);
    }))

  }

}

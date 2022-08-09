import { LoadingService } from './../servicesComponent/loading.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from 'rxjs/operators'

@Injectable()
export class LoadingInterceptor implements HttpInterceptor{

  constructor(public loadingService: LoadingService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Cheguei no Interceptor")

    this.loadingService.show();

    return next.handle(req).pipe(finalize( () => this.loadingService.hidden()))

  }

}

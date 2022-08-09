import { DialogFailComponent } from './../sharedComponents/dialog-fail/dialog-fail.component';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators'
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(public dialog: MatDialog){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(catchError(err => {

      if(err.status == 0){
        this.openDialog("Erro na Requisição", "Não foi possível Prosseguir com a requisição","settings");
      }

      if(err.status == 404){
        this.openDialog("Erro na Requisição", "Não foi possível encontrar o Recurso desejado","settings");
      }

      console.log("Passei pelo Interceptor sem o IF")
      if(err.status == 401 || err.status == 403 || err.status == 204){
        console.log("Passei pelo Interceptor")
      }


      console.log(err);
      return throwError(err);
    }))
  }

  openDialog(titulo: string, mensagem: string, icone: string): void {
    this.dialog.open(DialogFailComponent, {
      data: {
        titulo: titulo,
        mensagem: mensagem,
        icone: icone
      }
    });
  }

}

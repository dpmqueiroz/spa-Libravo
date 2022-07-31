import { responseGoogleOauth } from './../models/responseGoogleOAuth.model';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import jwtDecode,{ JwtPayload } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OAuthGoogleService {

  constructor(
    private router: Router
  ) { }

  oAuthGoogleFunction (){

    window.google.accounts.id.initialize({
        client_id: environment.clienteId,
        //FUNÇÃO QUE RECEB E TRATA OS DADOS RECEBIDOS
        callback: (response: responseGoogleOauth) => {
          const decoded = jwtDecode<JwtPayload>(response.credential)
          console.log(decoded);
          this.router.navigate(['administracao'])
        }
      })

      window.google.accounts.id.renderButton(
        document.getElementById('btn-google'),
        {
          theme: "outline",
          size: "large",
          shape: "square"
        }
      )
  }
}

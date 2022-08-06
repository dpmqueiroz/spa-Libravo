import { responseGoogleOauth } from './../models/responseGoogleOAuth.model';
import { environment } from './../../environments/environment.prod';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OAuthGoogleService {

  constructor(
    private router: Router,
    private ngZone: NgZone,
  ) { }

  async oAuthGoogleFunction() {

    await window.google.accounts.id.initialize({
      client_id: environment.clienteId,
      callback: (response: responseGoogleOauth) => {
        sessionStorage.clear();
        sessionStorage.setItem("@libravo:token", response.credential);
        this.ngZone.run(() => {
          this.router.navigate(['administracao'])
        })
      }
    })

    await window.google.accounts.id.renderButton(
      document.getElementById('btn-google'),
      {
        theme: "outline",
        size: "large",
        shape: "square"
      }
    )
  }
  
}

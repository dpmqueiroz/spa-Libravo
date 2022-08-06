import { Usuario } from './../models/Usuario';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) {

  }

  pegarTodosUsuarios(): Observable<any>{
    return this.http.get<Usuario[]>(environment.urlBackEnd + "/usuarios");
  }

  pegarUmUsuarioPorId(id: string){
    return this.http.get<Usuario>(environment.urlBackEnd + "/usuarios/" + id);
  }
}

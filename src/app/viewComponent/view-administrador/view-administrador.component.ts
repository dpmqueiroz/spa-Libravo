import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicesComponent/usuario.service';
import { Permissao } from 'src/app/models/Permissao';

@Component({
  selector: 'app-view-administrador',
  templateUrl: './view-administrador.component.html',
  styleUrls: ['./view-administrador.component.scss']
})
export class ViewAdministradorComponent implements OnInit {

  usuarios!: Usuario[];
  permissoes!: Permissao[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.usuarioService.pegarTodosUsuarios().toPromise().then(res => {
      this.usuarios = res;
    })
    this.usuarioService.pegarTodasPermissoes().toPromise().then(res => {
      this.permissoes = res;
    })
  }

}

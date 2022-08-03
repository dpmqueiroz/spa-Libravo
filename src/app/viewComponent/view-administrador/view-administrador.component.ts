import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicesComponent/usuario.service';

@Component({
  selector: 'app-view-administrador',
  templateUrl: './view-administrador.component.html',
  styleUrls: ['./view-administrador.component.scss']
})
export class ViewAdministradorComponent implements OnInit {

  usuarios!: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.pegarTodosUsuarios().subscribe((res) => {
      this.usuarios = res;
    })
  }

}

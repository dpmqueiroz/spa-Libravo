import { UsuarioService } from 'src/app/servicesComponent/usuario.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-deletar-usuario',
  templateUrl: './dialog-deletar-usuario.component.html',
  styleUrls: ['./dialog-deletar-usuario.component.scss']
})
export class DialogDeletarUsuarioComponent implements OnInit {

  idUsuario!: number;

  constructor(public dialogRef: MatDialogRef<DialogDeletarUsuarioComponent>,
              private usuarioService: UsuarioService,
              @Inject(MAT_DIALOG_DATA) public data: {firstName: string, id: number}) { }

  ngOnInit(): void {

  }

  deletarUsuario(){
    this.usuarioService.deletarUmUsuario(this.data.id).toPromise().then().catch(e => {
      alert("Tivemos um erro ao executar a deleção do usuario")
    })
  }

}

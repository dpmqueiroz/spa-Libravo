import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeletarUsuarioComponent } from '../dialog-deletar-usuario/dialog-deletar-usuario.component';

@Component({
  selector: 'app-dialog-fail',
  templateUrl: './dialog-fail.component.html',
  styleUrls: ['./dialog-fail.component.scss']
})
export class DialogFailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogFailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {titulo: string, mensagem: string, icone: string}) { }

  ngOnInit(): void {
  }

}

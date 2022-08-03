import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/servicesComponent/usuario.service';

@Component({
  selector: 'app-tabela-usuario-edit',
  templateUrl: './tabela-usuario-edit.component.html',
  styleUrls: ['./tabela-usuario-edit.component.scss']
})
export class TabelaUsuarioEditComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  userId!: string;
  usuario!: Usuario;
  form!: FormGroup;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private usuarioService: UsuarioService) {
    this.route.params.subscribe(params => this.userId = params['id']);

    this.usuarioService.pegarUmUsuarioPorId(this.userId).subscribe( (res) => {
      console.log(res);
      if(res.permissao != null){


        this.form = formBuilder.group({
          firstName: [res.firstName, Validators.required],
          lastName: [res.lastName, Validators.required],
          email: [res.email, Validators.required],
          permissao: [res.permissao.nome, Validators.required],
          imageUrl: [res.imageUrl, Validators.required],
        })

      }else{

        this.form = formBuilder.group({
          firstName: [res.firstName, Validators.required],
          lastName: [res.lastName, Validators.required],
          email: [res.email, Validators.required],
          permissao: ['Não possui', Validators.required],
          imageUrl: [res.imageUrl, Validators.required],
        })
      }

      this.usuario = res;
    })
  }

  ngOnInit(): void {
    console.log(this.form)
  }
}

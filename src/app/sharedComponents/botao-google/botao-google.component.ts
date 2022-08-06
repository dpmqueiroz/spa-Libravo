import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { OAuthGoogleService } from 'src/app/servicesComponent/oauth-google.service';

@Component({
  selector: 'app-botao-google',
  templateUrl: './botao-google.component.html',
  styleUrls: ['./botao-google.component.scss']
})
export class BotaoGoogleComponent implements OnInit {

  clienteId: string = environment.clienteId;

  constructor(private oAuthGoogleService: OAuthGoogleService) { }

  ngOnInit(): void {
    this.oAuthGoogleService.oAuthGoogleFunction()
  }

}

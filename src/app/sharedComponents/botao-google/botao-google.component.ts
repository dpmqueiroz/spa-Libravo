import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-google',
  templateUrl: './botao-google.component.html',
  styleUrls: ['./botao-google.component.scss']
})
export class BotaoGoogleComponent implements OnInit {

  clienteId: string = environment.clienteId;

  constructor() { }

  ngOnInit(): void {
  }

}

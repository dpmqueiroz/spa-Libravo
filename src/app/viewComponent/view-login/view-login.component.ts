import { Component, OnInit } from '@angular/core';
import { OAuthGoogleService } from 'src/app/servicesComponent/oauth-google.service';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss']
})
export class ViewLoginComponent implements OnInit {

  constructor(private oAuthGoogleService: OAuthGoogleService) { }

  ngOnInit(): void {
    this.oAuthGoogleService.oAuthGoogleFunction()
  }
}

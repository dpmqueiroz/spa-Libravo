import { Subject } from 'rxjs';
import { LoadingService } from './../../servicesComponent/loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  isLoading: Subject<boolean> = this.loading.isLoading;

  constructor(private loading: LoadingService) {}


}

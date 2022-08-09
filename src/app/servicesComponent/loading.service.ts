import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public isLoading = new Subject<boolean>();

  show(){
    this.isLoading.next(true);
  }

  hidden(){
    this.isLoading.next(false);
  }

}

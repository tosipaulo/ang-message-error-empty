import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageStatusService {

  private staus$: {title: string; subtitle: string}

  constructor() { }

  setStatus(type) {
    this.staus$ = type
  }

  getStatus() {
    return this.staus$;
  }
}

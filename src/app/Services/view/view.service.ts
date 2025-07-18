import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor() { }

  private isListViewSubject = new BehaviorSubject<boolean>(false);
  isListView$ = this.isListViewSubject.asObservable();

  toggleView() {
    this.isListViewSubject.next(!this.isListViewSubject.value);
  }

  getCurrentValue() {
    return this.isListViewSubject.value;
  }
}

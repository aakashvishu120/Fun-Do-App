import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private searchQuery = new BehaviorSubject<any>(null);
  search$ = this.searchQuery.asObservable();

  updateSearch(query: string) {
    this.searchQuery.next(query);
  }

  // setData(newData: any) {
  //   this.data.next(newData);
  // }

  // getData() {
  //   return this.currentData;
  // }
}

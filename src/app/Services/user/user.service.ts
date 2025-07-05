import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpService) { }

  login(data:any) {
    return this.http.postApi('/login',data)
  }
}

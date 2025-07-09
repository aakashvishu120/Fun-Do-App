import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  login(data: any) {
    return this.http.postApi('/user/login', data)
  }

  register(data: any) {
    return this.http.postApi('/user/userSignUp', data)
  }

}

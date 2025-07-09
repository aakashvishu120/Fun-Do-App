import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpService) { }

  addNotes(data: any) {
    const token = localStorage.getItem('Token');
    console.log("mytoken inside addNotes", token);
    const headers = new HttpHeaders({
      "Authorization" : token || ''
    });

    return this.http.postApi(`/notes/addNotes`, data, headers);
  }


  getNotes(){
  const token = localStorage.getItem('Token');
    console.log("mytoken inside getNotes", token);
    const headers = new HttpHeaders({
      "Authorization" : token || ''
    });
    const queryParams = `?access_token=${token}`;
    return this.http.getApi(`/notes/getNotesList${queryParams}`);
  }
}

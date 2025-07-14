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
      "Authorization": token || ''
    });

    return this.http.postApi(`/notes/addNotes`, data, headers);
  }


  // getNotes(){
  // const token = localStorage.getItem('Token');
  //   console.log("mytoken inside getNotes", token);
  //   const headers = new HttpHeaders({
  //     "Authorization" : token || ''
  //   });
  //   const queryParams = `?access_token=${token}`;
  //   // return this.http.getApi(`/notes/getNotesList${queryParams}`);
  //   return this.http.getApi(`/notes/getNotesList`, {headers:headers});
  //   // return this.http.getApi(`/notes/addNotes`, headers);

  // }


  getNotes() {
    const token = localStorage.getItem('Token');
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        })
    };
    // console.log('Headers:', httpOption);
    return this.http.getApi('/notes/getNotesList', httpOption.headers);
  }

  getTrashNotesList() {
    const token = localStorage.getItem('Token');
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        })
    };
    // console.log('Headers:', httpOption);
    return this.http.getApi('/notes/getTrashNotesList', httpOption.headers);
  }

  trashNotes(data:any) {
    const token = localStorage.getItem('Token');
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        })
    };
    return this.http.postApi('/notes/trashNotes', data , httpOption.headers);
  }

    getArchiveNotesList(){
    const token = localStorage.getItem('Token');
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        })
    };
    // console.log('Headers:', httpOption);
    return this.http.getApi('/notes/getArchiveNotesList', httpOption.headers);
  }


  archiveNotes(data:any) {
    console.log("reached inside notes service")
    const token = localStorage.getItem('Token');
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        })
    };
    return this.http.postApi('/notes/archiveNotes', data , httpOption.headers);
  }

}

import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('Token') || '';
    return new HttpHeaders({
      'Authorization': token,
      'Content-Type': 'application/json'
    });
  }

  addNotes(data: any) {
    return this.http.postApi(`/notes/addNotes`, data, this.getAuthHeaders());
  }

  getNotes() {
    return this.http.getApi('/notes/getNotesList', this.getAuthHeaders());
  }

  getTrashNotesList() {
    return this.http.getApi('/notes/getTrashNotesList', this.getAuthHeaders());
  }

  trashNotes(data: any) {
    return this.http.postApi('/notes/trashNotes', data, this.getAuthHeaders());
  }

  getArchiveNotesList() {
    return this.http.getApi('/notes/getArchiveNotesList', this.getAuthHeaders());
  }

  archiveNotes(data: any) {
    return this.http.postApi('/notes/archiveNotes', data, this.getAuthHeaders());
  }

  deleteForeverNotes(data :any){
    return this.http.postApi('/notes/deleteForeverNotes', data, this.getAuthHeaders());
  }

}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NotesService } from '../../Services/notes/notes.service';


@Component({
  selector: 'app-note-menu',
  imports: [CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './note-menu.component.html',
  styleUrl: './note-menu.component.scss',
  standalone: true,
})
export class NoteMenuComponent {

  constructor(
    private note: NotesService
  ) { }


  @Input() noteId!: string;

  deleteNote() {
  console.log(`Deleting note with ID: ${this.noteId}`);

  interface DeleteNotePayload {
    isDeleted: boolean;
    noteIdList: string[];  
  }

  const payload: DeleteNotePayload = {
    isDeleted: true,
    noteIdList: [this.noteId]  
  };

  this.note.trashNotes(payload).subscribe({
    next: (result: any) => {
      console.log('Notes Deleted Successfully :', result);
    },
    error: () => {
      console.error('Failed in Deleting Notes :');
    }
  });
}


  addLabel() {
    console.log(`Adding label to note: ${this.noteId}`);
  }

  makeCopy() {
    console.log(`Making a copy of note: ${this.noteId}`);
  }

  addDrawing() {
    console.log(`Adding drawing to note: ${this.noteId}`);
  }

  copyToDocs() {
    console.log(`Copying to Google Docs for note: ${this.noteId}`);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NotesService } from '../../Services/notes/notes.service';

interface DeleteNotePayload {
  isDeleted: boolean;
  noteIdList: string[];
}

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
  @Output() trashed = new EventEmitter<void>();  //for refershing the parent after delete

  deleteNote() {
    console.log(`Temp Deleting note with ID: ${this.noteId}`);

    const payload: DeleteNotePayload = {
      isDeleted: true,
      noteIdList: [this.noteId]
    };

    this.note.trashNotes(payload).subscribe({
      next: (result: any) => {
        console.log('Notes Deleted Successfully :', result);
        this.trashed.emit();   //refreshing parent
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

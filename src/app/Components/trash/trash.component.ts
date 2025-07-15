import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { NotesCardContainerComponent } from '../notes-card-container/notes-card-container.component';

interface DeleteNotePayload {
  isDeleted: boolean;
  noteIdList: string[];
}


@Component({
  selector: 'app-trash',
  imports: [NotesCardContainerComponent],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})
export class TrashComponent implements OnInit {
  constructor(
    private note: NotesService
  ) { }

  notes: any[] = [];

  onNoteTrashed(): void {
    this.note.getTrashNotesList().subscribe({
      next: (result: any) => {
        console.log('Notes temp. Delted Successfully inside trash.ts :', result);
        this.notes = result.data?.data || [];
        console.log("inside trash component", this.notes);
      },
      error: () => {
        console.error('Failed in temp. deleting the Notes :');
      }
    });
  }
  ngOnInit() {
    this.onNoteTrashed();
  }

  restoreNote(noteId: string): void {
    console.log(`restore note with ID: ${noteId}`);
    const payload: DeleteNotePayload = {
      isDeleted: false,
      noteIdList: [noteId]
    };

    this.note.trashNotes(payload).subscribe({
      next: (result: any) => {
        console.log('Restore Note Successfully :', result);
        this.onNoteTrashed();
      },
      error: () => {
        console.error('Failed in Restoring Notes :');
      }
    });
  }

  deleteNotePermanently(noteId: string): void {
    console.log(`Permanently Delete note with ID: ${noteId}`);
    const payload: DeleteNotePayload = {
      isDeleted: false,
      noteIdList: [noteId]
    };

    this.note.deleteForeverNotes(payload).subscribe({
      next: () => {
        console.log('Note permanently deleted');
        this.onNoteTrashed();
      },
      error: () => {
        console.error('Failed in Permanently Deleting Notes :');
      }
    });
  }


}

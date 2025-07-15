import { Component } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { NotesCardContainerComponent } from '../notes-card-container/notes-card-container.component';

// interface UnArchivedPayload {
//   isDeleted: boolean;
//   noteIdList: string[];
// }

@Component({
  selector: 'app-archive',
  imports: [NotesCardContainerComponent],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent {
  constructor(
    private note: NotesService
  ) { }

  notes: any[] = [];
  ngOnInit() {
    this.fetchArchiveNotes();
  }

  fetchArchiveNotes(): void {
    this.note.getArchiveNotesList().subscribe({
      next: (result: any) => {
        this.notes = result.data?.data || [];
        console.log("Get Archive Notes List", this.notes);
      },
      error: () => {
        console.error('Failed in Archiving the Notes :');
      }
    });
  }

  unArchivedNotes(noteId: string): void {
    console.log(`UnArchived note with ID: ${noteId}`);
    const payload = {
      noteIdList: [noteId],
      isArchived: false
    };

    this.note.archiveNotes(payload).subscribe({
      next: () => {
        console.log('Note UnArchived successfully');
        this.fetchArchiveNotes();
      },
      error: () => {
        console.error('Error in UnArchiving note:');
      }
    });
  }

}

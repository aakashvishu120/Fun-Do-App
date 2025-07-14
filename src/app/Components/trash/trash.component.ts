import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { NotesCardContainerComponent } from '../notes-card-container/notes-card-container.component';

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
        console.log('Notes Delted Successfully inside trash.ts :', result);
        this.notes = result.data?.data || [];
        console.log("inside trash component", this.notes);
      },
      error: () => {
        console.error('Failed in Fetching the Notes :');
      }
    });
  }
  ngOnInit() {
    this.onNoteTrashed();
  }
}

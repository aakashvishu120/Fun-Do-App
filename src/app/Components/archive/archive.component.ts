import { Component } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { NotesCardContainerComponent } from '../notes-card-container/notes-card-container.component';

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
    this.note.getArchiveNotesList().subscribe({
      next: (result: any) => {
        this.notes = result.data?.data || [];
        console.log("Get Archive Notes List",this.notes);
      },
      error: () => {
        console.error('Failed in Archiving the Notes :');
      }
    });
  }
}

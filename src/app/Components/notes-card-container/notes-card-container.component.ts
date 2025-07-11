import { ChangeDetectionStrategy, Component, OnInit,Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NotesService } from '../../Services/notes/notes.service';
import { MatCardModule } from '@angular/material/card';
import { NotesIconComponent } from '../notes-icon/notes-icon.component';

@Component({
  selector: 'app-notes-card-container',
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NotesIconComponent,
  ],
  templateUrl: './notes-card-container.component.html',
  styleUrl: './notes-card-container.component.scss'
})
export class NotesCardContainerComponent implements OnInit {
  constructor(
    private note: NotesService
  ) { }

  @Input() notes: any[] = [];
  ngOnInit() {
    this.note.getNotes().subscribe({
      next: (result: any) => {
        console.log('Notes Fetched Successfully inside card container:', result);
        // this.notes = result.data?.data || [];
        const allNotes = result.data?.data || [];
        this.notes = allNotes.filter((note: any) => !note.isDeleted && !note.isArchived);


      },
      error: () => {
        console.error('Failed in Fetching the Notes :');
      }
    });
  }
}

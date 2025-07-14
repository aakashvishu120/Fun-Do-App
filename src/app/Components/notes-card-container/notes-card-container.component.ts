import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NotesService } from '../../Services/notes/notes.service';
import { NotesIconComponent } from '../notes-icon/notes-icon.component';

// Define a strongly typed Note interface
interface Note {
  id: string;
  title: string;
  description: string;
  color?: string;
  isArchived?: boolean;
  isDeleted?: boolean;
}

@Component({
  selector: 'app-notes-card-container',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NotesIconComponent
  ],
  templateUrl: './notes-card-container.component.html',
  styleUrl: './notes-card-container.component.scss'
})
export class NotesCardContainerComponent implements OnInit {
  @Input() notes: Note[] = [];
  @Output() refreshRequested = new EventEmitter<void>();
  @Input() fetchSelf: boolean = false;

  constructor(private noteService: NotesService) {}

  ngOnInit(): void {
    // Do nothing if notes are passed as input.
    // If you want to fetch them dynamically, remove [notes] binding from parent
    if (this.notes.length === 0) {
      this.fetchNotes();
    }
  }

  fetchNotes(): void {
    this.noteService.getNotes().subscribe({
      next: (result: any) => {
        console.log('Notes fetched successfully:', result);
        const allNotes: Note[] = result.data?.data || [];
        this.notes = allNotes.filter(note => !note.isDeleted && !note.isArchived);
      },
      error: () => {
        console.error('Failed to fetch notes.');
      }
    });
  }

  archiveNote(noteId: string): void {
    const payload = {
      noteIdList: [noteId],
      isArchived: true
    };

    this.noteService.archiveNotes(payload).subscribe({
      next: () => {
        console.log('Note archived successfully');
        this.notes = this.notes.filter((note: Note) => note.id !== noteId);
        this.refreshRequested.emit(); // Notify parent
      },
      error: err => {
        console.error('Error archiving note:', err);
      }
    });
  }

  onNoteTrashed(): void {
    console.log('Note trashed - refreshing in card container');
    this.fetchNotes(); // ✅ Refresh here only!
  }
}

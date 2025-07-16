import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NotesService } from '../../Services/notes/notes.service';
import { NotesIconComponent } from '../notes-icon/notes-icon.component';
import { MatDialog } from '@angular/material/dialog';
import { EditNoteComponent } from '../../edit-note/edit-note.component';


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
export class NotesCardContainerComponent{
  @Input() notes: Note[] = [];
  @Output() refreshRequested = new EventEmitter<void>();
  @Input() fetchSelf: boolean = false;
  @Input() cardContext: 'form' | 'card' | 'trash' | 'archive' = 'card';
  @Output() restore = new EventEmitter<string>();
  @Output() deleteForever = new EventEmitter<string>();
  @Output() unarchived = new EventEmitter<string>();

  constructor(private noteService: NotesService, private dialog: MatDialog) { }

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
    // this.fetchNotes(); // ✅ Refresh here only!
      this.refreshRequested.emit(); // 🔁 Let parent fetch notes again
  }

  getHiddenIcons(): string[] {
    if (this.cardContext === 'trash') {
      return ['format_color_text', 'palette', 'add_alert', 'person_add', 'photo', 'archive', 'more_vert', 'undo', 'redo', 'close']; // hide unneeded trash view icons
    }

    if(this.cardContext === 'archive'){
      return ['undo', 'redo', 'format_color_text', 'close', 'archive'];
    }
    return ['undo', 'redo', 'format_color_text', 'close'];
  }

  openEditDialog(note: Note): void {
  const dialogRef = this.dialog.open(EditNoteComponent, {
    data: note,
    autoFocus: false
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.refreshRequested.emit();
    }
  });
}


}

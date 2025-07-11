import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NoteMenuComponent } from '../note-menu/note-menu.component';


@Component({
  selector: 'app-notes-icon',
  imports: [CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NoteMenuComponent],
  templateUrl: './notes-icon.component.html',
  styleUrl: './notes-icon.component.scss'
})
export class NotesIconComponent {
  @Input() hideIcons: string[] = [];
  @Input() context: 'form' | 'card' = 'form';
  @Input() noteId!: string;
}

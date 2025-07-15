import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NoteMenuComponent } from '../note-menu/note-menu.component';
import { ColorPickerComponent } from '../color-picker/color-picker.component';


@Component({
  selector: 'app-notes-icon',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NoteMenuComponent,
    ColorPickerComponent
  ],
  templateUrl: './notes-icon.component.html',
  styleUrl: './notes-icon.component.scss'
})
export class NotesIconComponent {
  @Input() hideIcons: string[] = [];
  // @Input() context: 'form' | 'card' = 'form';
  @Input() context: 'form' | 'card' | 'trash' = 'form';
  @Input() noteId!: string;

  @Output() colorChange = new EventEmitter<string>();
  setNoteColor(color: string) {
    console.log("notes-icon component colorvalue", color);
    this.colorChange.emit(color);
  }

  @Output() closeForm = new EventEmitter<void>();
  onCloseClicked() {
    this.closeForm.emit();
  }

  @Output() archive = new EventEmitter<void>();
  onArchiveClicked() {
    this.archive.emit();
  }

  @Output() trashed = new EventEmitter<void>();
  onNoteTrashed() {
    this.trashed.emit();
    console.log("notes icon ", this.trashed);
  }

  @Output() restore = new EventEmitter<void>();
  @Output() deleteForever = new EventEmitter<void>();

  onRestoreClicked() {
    this.restore.emit();
  }

  onDeleteForeverClicked() {
    this.deleteForever.emit();
  }

}

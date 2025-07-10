import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesService } from '../../Services/notes/notes.service';
import { MatCardModule } from '@angular/material/card';
import { NotesIconComponent } from '../notes-icon/notes-icon.component';
// import { NotesCardContainerComponent } from '../notes-card-container/notes-card-container.component';
@Component({
  selector: 'app-notes-card-container',
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    NotesIconComponent,
    NotesCardContainerComponent
  ],
  templateUrl: './notes-card-container.component.html',
  styleUrl: './notes-card-container.component.scss'
})
export class NotesCardContainerComponent {
    // showButtons = true;
  notesForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private note: NotesService,
  ) { }

  notes: any[] = [];
  ngOnInit() {
    this.notesForm = this.fb.group({
      title: [''],
      description: ['']
    });

    this.note.getNotes().subscribe({
      next: (result: any) => {
        console.log('Notes Fetched Successfully inside card container:', result);
        this.notes = result.data?.data || [];
      },
      error: () => {
        console.error('Failed in Fetching the Notes :');
      }
    });
  }
}

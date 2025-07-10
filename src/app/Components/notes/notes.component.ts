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
import { NotesCardContainerComponent } from '../notes-card-container/notes-card-container.component';


@Component({
  selector: 'app-notes',
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
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent  {
  showButtons = true;
  notesForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private note: NotesService,
  ) { }

  hideButtons() {
    this.showButtons = false;
  }

  onClickOutside(event: MouseEvent, container: HTMLElement): void {
    const clickedInside = container.contains(event.target as Node);

    if (!clickedInside) {
      this.showButtons = true; // collapse form
    }
  }

  onSubmit(): void {
    console.log("notes form values", this.notesForm.value);

    this.note.addNotes(this.notesForm.value).subscribe({
      next: (result: any) => {
        console.log('Notes Added Successfully :', result);
      },
      error: () => {
        console.error('Failed in Adding Notes :');
      }
    });
  }

  // notes: any[] = [];
  // ngOnInit() {
  //   this.notesForm = this.fb.group({
  //     title: [''],
  //     description: ['']
  //   });

  //   this.note.getNotes().subscribe({
  //     next: (result: any) => {
  //       console.log('Notes Fetched Successfully :', result);
  //       this.notes = result.data?.data || [];
  //     },
  //     error: () => {
  //       console.error('Failed in Fetching the Notes :');
  //     }
  //   });
  // }
}

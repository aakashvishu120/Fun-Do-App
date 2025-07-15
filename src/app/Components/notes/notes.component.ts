import { ChangeDetectionStrategy, Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
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
import { SearchService } from '../../Services/search/search.service';
import { Subscription } from 'rxjs';

interface Note {
  id: string;
  title: string;
  description: string;
  color?: string;
  isArchived?: boolean;
  isDeleted?: boolean;
}


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
export class NotesComponent implements OnInit {
  showButtons = true;
  selectedColor: string = '';
  notesForm!: FormGroup;
  filteredNotes: any[] = [];
  private searchSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private note: NotesService,
    private searchService: SearchService

  ) { }

  // @ViewChild(NotesCardContainerComponent) cardContainer!: NotesCardContainerComponent;

  hideButtons() {
    this.showButtons = false;
  }

  onClickOutside(event: MouseEvent, container: HTMLElement): void {
    const clickedInside = container.contains(event.target as Node);

    if (!clickedInside) {
      this.showButtons = true; // collapse form
    }
  }

  onFormClose() {
    this.showButtons = true;                 // Collapse the form
    this.notesForm.reset();                  // Clear form fields
    this.selectedColor = '';                // Reset color if needed
  }

  onSubmit(): void {
    console.log("notes form values", this.notesForm.value);

    const { title, description, color } = this.notesForm.value;
    if (!title?.trim() && !description?.trim() && !color) {
      console.warn('Form is empty. Note not added.');
      return;
    }

    this.note.addNotes(this.notesForm.value).subscribe({
      next: (result: any) => {
        console.log('Notes Added Successfully :', result);
        this.onFormClose();
        this.fetchNotes();
      },
      error: () => {
        console.error('Failed in Adding Notes :');
      }
    });
  }

  onColorPicked(color: string) {
    this.selectedColor = color;
    this.notesForm.patchValue({ color });
    console.log('notes component Selected color:', color);
  }

  notes: any[] = [];
  ngOnInit() {
    this.notesForm = this.fb.group({
      title: [''],
      description: [''],
      color: ['']
    });

    this.fetchNotes();

    //subscribe the service
    this.searchSub = this.searchService.search$.subscribe(query => {
      this.applySearch(query);
    });
  }

  fetchNotes(): void {
    this.note.getNotes().subscribe({
      next: (result: any) => {
        console.log('Notes fetched successfully:', result);
        const allNotes: Note[] = result.data?.data || [];
        this.notes = allNotes.filter(note => !note.isDeleted && !note.isArchived);
        this.filteredNotes = [...this.notes];
      },
      error: () => {
        console.error('Failed to fetch notes.');
      }
    });
  }

  applySearch(query: string) {
    if (!query || typeof query !== 'string') {
      this.filteredNotes = [...this.notes]; // default to showing all notes
      return;
    }

    const lower = query.toLowerCase().trim();
    this.filteredNotes = this.notes.filter(note =>
      note.title?.toLowerCase().includes(lower) ||
      note.description?.toLowerCase().includes(lower)
    );
  }

  ngOnDestroy() {
    this.searchSub?.unsubscribe();
  }
}

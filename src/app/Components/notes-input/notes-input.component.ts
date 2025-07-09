import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-notes-input',
  imports: [MatButtonModule, MatIconModule, CommonModule, MatInputModule, MatFormFieldModule,FormsModule, ReactiveFormsModule],
  templateUrl: './notes-input.component.html',
  styleUrl: './notes-input.component.scss',
  standalone: true,
})
export class NotesInputComponent {
 showButtons = true;
  notesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.notesForm = this.fb.group({
      title: [''],
      'take-a-note': ['']
    });
  }

  hideButtons() {
    this.showButtons = false;
  }

  showButtonsBack() {
    // Optional: Delay to allow button click before collapsing
    setTimeout(() => {
      this.showButtons = true;
    }, 150);
  }
}

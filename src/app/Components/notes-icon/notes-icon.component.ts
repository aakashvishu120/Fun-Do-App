import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-notes-icon',
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './notes-icon.component.html',
  styleUrl: './notes-icon.component.scss'
})
export class NotesIconComponent {
  @Input() hideIcons: string[] = [];
}

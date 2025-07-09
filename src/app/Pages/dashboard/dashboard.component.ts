import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NotesInputComponent } from '../../Components/notes-input/notes-input.component';

@Component({
  selector: 'app-dashboard',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule, NotesInputComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showNavLabels: boolean = true;

  toggleNavLabels(): void {
    this.showNavLabels = !this.showNavLabels;
    console.log("showNavLabels",this.showNavLabels);
  }
}

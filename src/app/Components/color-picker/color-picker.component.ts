// import { Component } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-picker',
  imports: [CommonModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {
@Output() colorSelected = new EventEmitter<string>();

  colors: string[] = [
    '#fff8e1', '#f8bbd0', '#e1bee7', '#d1c4e9',
    '#c5cae9', '#bbdefb', '#b2dfdb', '#dcedc8',
    '#f0f4c3', '#ffe0b2', '#ffccbc', '#d7ccc8'
  ];

  selectColor(color: string) {
    console.log("color picker componnt", color);
    this.colorSelected.emit(color);
  }
}

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../Services/search/search.service';
import { ViewService } from '../../Services/view/view.service';

@Component({
  selector: 'app-dashboard',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule, RouterOutlet, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private searchService: SearchService, private viewService: ViewService) { }

  showNavLabels: boolean = true;

  toggleNavLabels(): void {
    this.showNavLabels = !this.showNavLabels;
    console.log("showNavLabels", this.showNavLabels);
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log("inside dashboard comaponent search query is : ", input);
    this.searchService.updateSearch(input.value);
  }

  toggleViewMode() {
    this.viewService.toggleView();  
  }
}

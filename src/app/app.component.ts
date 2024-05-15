import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PillFiltersComponent } from './pill-filters/pill-filters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, PillFiltersComponent],
})
export class AppComponent {
  title = 'pill-filters';
  pills: string[];
  constructor() {
    this.pills = ['test1', 'test2', 'test3'];
  }
}

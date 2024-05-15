import { Component, EventEmitter, Input } from '@angular/core';
import { PillComponent } from "../pill/pill.component";
import { NgForOf } from '@angular/common';

@Component({
    selector: 'app-pill-filters',
    standalone: true,
    templateUrl: './pill-filters.component.html',
    styleUrl: './pill-filters.component.scss',
    imports: [PillComponent,NgForOf]
})
export class PillFiltersComponent {
  private pillLabels: string[] = [];

  @Input() set pills(value: string[]) {
    this.pillLabels = value;
    this.unselectedPills = value;
  }

  public unselectedPills: string[] = [];
  public selectedPills: string[] = [];

  public selected = new EventEmitter<string[]>();

  public addFilter(pillDetails: { hasBeenSelected: boolean, label: string }): void {
    if (pillDetails.hasBeenSelected) {
      const selectedIndex = this.unselectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.unselectedPills.splice(selectedIndex, 1);
      this.selectedPills.push(selectedPill);
      this.selected.emit(this.selectedPills);
    }
  }

  public removeFilter(pillDetails: { hasBeenSelected: boolean, label: string }): void {
    if (!pillDetails.hasBeenSelected) {
      const selectedIndex = this.selectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.selectedPills.splice(selectedIndex, 1);
      this.unselectedPills.push(selectedPill);
    }
  }
}

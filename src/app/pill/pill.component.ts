import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PillType } from './pill-type.enum';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-pill',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss'
})
export class PillComponent {
  @Input() public type: PillType = PillType.Info;
  @Input() public label = 'test';
  @Input() public iconClasses = 'fa fa-star';
  @Input() public isActive = true;
  @Input() public canBeSelected = false;
  @Output() public selected = new EventEmitter<{ hasBeenSelected: boolean, label: string }>();

  public toggle(): void {
    this.isActive = !this.isActive;
    this.selected.emit({ hasBeenSelected: this.isActive, label: this.label });
  }
}

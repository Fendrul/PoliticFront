import {Component, Input, Output} from '@angular/core';
import {Filter} from "../../../../../../shared/models/Filter";

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
})
export class FilterCheckboxComponent {

  @Input()
  filter!: Filter[];

  @Output()
  selectedOptions = [];
  label = 'Filter by';

  constructor() {
    this.filter = [
      {label: 'All', value: 'all'},
      {label: 'New', value: 'new'},
    ];
  }
}

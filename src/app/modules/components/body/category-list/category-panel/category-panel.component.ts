import {Component, Input} from '@angular/core';
import {Category} from "../../../../../shared/models/Category";

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.scss']
})
export class CategoryPanelComponent {
  @Input() category!: Category;

}

import {Component, OnInit} from '@angular/core';
import {Category} from "../../../../shared/models/Category";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories!: Category[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      ({categories: fetchedCategories}) => {
        this.categories = fetchedCategories;
      }
    )
  }
}



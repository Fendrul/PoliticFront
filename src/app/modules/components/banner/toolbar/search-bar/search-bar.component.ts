import { Component } from '@angular/core';
import {debounceTime} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchControl = new FormControl();
  searchTerm: string = '';

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.searchTerm = value;
      });
  }
}

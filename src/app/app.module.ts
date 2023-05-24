import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BannerComponent} from './modules/components/banner/banner.component';
import {ToolbarComponent} from './modules/components/banner/toolbar/toolbar.component';
import {SearchBarComponent} from './modules/components/banner/toolbar/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ArgumentPanelComponent} from './modules/components/body/argument-panel/argument-panel.component';
import {
  FilterCheckboxComponent
} from './modules/components/banner/toolbar/search-bar/filter-checkbox/filter-checkbox.component';
import {DropdownModule} from "primeng/dropdown";
import {CheckboxModule} from "primeng/checkbox";
import {MultiSelectModule} from "primeng/multiselect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {CategoryListComponent} from './modules/components/body/category-list/category-list.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ToolbarComponent,
    SearchBarComponent,
    ArgumentPanelComponent,
    FilterCheckboxComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

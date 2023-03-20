import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './modules/components/banner/banner.component';
import { ToolbarComponent } from './modules/components/banner/toolbar/toolbar.component';
import { SearchBarComponent } from './modules/components/banner/toolbar/search-bar/search-bar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ArgumentPanelComponent } from './modules/components/body/argument-panel/argument-panel.component';
import { FilterCheckboxComponent } from './modules/components/filter-checkbox/filter-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ToolbarComponent,
    SearchBarComponent,
    ArgumentPanelComponent,
    FilterCheckboxComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

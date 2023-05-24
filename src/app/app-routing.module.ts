import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArgumentPanelComponent} from "./modules/components/body/argument-panel/argument-panel.component";
import {CategoryListComponent} from "./modules/components/body/category-list/category-list.component";

const routes: Routes = [
  {
    path: '', component: ArgumentPanelComponent,
  },
  {
    path: 'categories', component: CategoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

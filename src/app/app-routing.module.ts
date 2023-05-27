import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArgumentPanelComponent} from "./modules/components/body/argument-panel/argument-panel.component";
import {CategoryListComponent} from "./modules/components/body/category-list/category-list.component";
import {categoriesResolver} from "./shared/services/category.service";
import {argumentsByCategoryIdResolver, argumentsResolver} from "./shared/services/argument.service";

const routes: Routes = [
  {
    path: '', component: ArgumentPanelComponent, resolve: {arguments: argumentsResolver}
  },
  {
    path: 'categories', component: CategoryListComponent, resolve: {categories: categoriesResolver}
  },
  {
    path: 'category/:id', component: ArgumentPanelComponent, resolve: {arguments: argumentsByCategoryIdResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

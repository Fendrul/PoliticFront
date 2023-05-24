import {inject, Injectable} from '@angular/core';
import {ServerData} from "../utils/ServerData";
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {Category} from "../models/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  serverData: ServerData = ServerData.getInstance();

  private apiRUL = this.serverData.getServerUrl() + '/category';

  constructor(private http: HttpClient) {
  }

  getCategories() {
    return this.http.get<Category[]>(this.apiRUL + '/get_all');
  }

  getCategoriesFromArgumentId(argumentId: number) {
    return this.http.get(this.apiRUL + '/id:`${argumentId}`/get_all' + argumentId);
  }
}

export const categoriesResolver: ResolveFn<Category[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(CategoryService).getCategories();
  }

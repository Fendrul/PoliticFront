import { Injectable } from '@angular/core';
import {ServerData} from "../utils/ServerData";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  serverData: ServerData = ServerData.getInstance();

  private apiRUL = this.serverData.getServerUrl() + '/category';
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.apiRUL + '/get_all');
  }

  getCategoriesFromArgumentId(argumentId: number) {
    return this.http.get(this.apiRUL + '/id:`${argumentId}`/get_all' + argumentId);
  }
}

import {inject, Injectable} from '@angular/core';
import {ServerData} from '../utils/ServerData';
import {HttpClient} from "@angular/common/http";
import {Argument} from "../models/Argument";
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ArgumentService {
  serverData: ServerData = ServerData.getInstance();
  private apiURL = this.serverData.getServerUrl() + '/argument';

  constructor(private http: HttpClient) {
  }

  getArguments(numberArguments: number) {
    return this.http.get<Argument[]>(this.apiURL + '/list:' + numberArguments);
  }

  getArgumentFromCategoryId(categoryId: number) {
    //print in the console the result of this.http.get<Argument[]>(this.apiURL + "/category/" + categoryId)
    let result = this.http.get<Argument[]>(this.apiURL + "/category/" + categoryId);

    // result.subscribe((data) => {
    //   console.log(data);
    // });

    return result;
  }
}

export const argumentsResolver: ResolveFn<Argument[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(ArgumentService).getArguments(10);
  }

export const argumentsByCategoryIdResolver: ResolveFn<Argument[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(ArgumentService).getArgumentFromCategoryId(route.params['id']);
  }

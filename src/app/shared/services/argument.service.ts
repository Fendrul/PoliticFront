import { Injectable } from '@angular/core';
import { ServerData } from '../utils/ServerData';
import {HttpClient} from "@angular/common/http";
import {Argument} from "../models/Argument";

@Injectable({
  providedIn: 'root'
})
export class ArgumentService {
  serverData: ServerData = ServerData.getInstance();
  private apiURL = this.serverData.getServerUrl() + '/argument';
  constructor(private http: HttpClient) { }

  getArguments(numberArguments: number) {
    return this.http.get<Argument[]>(this.apiURL + '/list:' + numberArguments);
  }
}

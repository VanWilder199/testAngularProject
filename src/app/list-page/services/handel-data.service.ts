import {Injectable} from '@angular/core';
import {IObject} from "../../shared/models/data.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HandelDataService {

  constructor(private http: HttpClient) {
  }

  getJSON(): Observable<IObject> {
    return this.http.get<IObject>("assets/mocked/mock.json");
  }
}
